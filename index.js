import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js';
import { AdminRuter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';
import { Book } from './models/Book.js';
import { Student } from './models/Student.js';
import { Admin } from './models/Admin.js';
import path from "path";
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
    origin: [`${window.location.origin}`],
    credentials: true
}));
app.use(cookieParser());
dotenv.config();

app.use('/auth', AdminRuter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments();
        const book = await Book.countDocuments();
        const admin = await Admin.countDocuments();
        return res.json({ ok: true, student, book, admin });
    } catch (error) {
        return res.json({ err: error.message });
    }
});

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});

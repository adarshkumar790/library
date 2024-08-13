import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const Connection = async () => {
    try{
    mongoose.connect("mongodb+srv://AdarshKumar:7903848803@cluster0.bpglqqv.mongodb.net/")
    console.log("Connected")
    }
    catch(error) {
       console.log("Error", +error)
    }

}
Connection()
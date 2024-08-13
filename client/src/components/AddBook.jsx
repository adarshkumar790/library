import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/AddStudent.css';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${window.location.origin}/book/add`, {name, author, imageUrl})
        .then(res => {
            if(res.data.added) {
                navigate('/books')
            }
            else {
                console.log(res);
            }
        })
        .catch (err => console.log(err))

    }

  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
       <h2>Add Book</h2>
       <div className='form-group'>
        <label htmlFor='book'>Book Name:</label>
        <input type='text' id="book" onChange={(e) => setName(e.target.value)} placeholder='Book Name' name="book"/>
       </div>
       <div className='form-group'>
        <label htmlFor='author'>Author Name:</label>
        <input type='text' id="author" onChange={(e) => setAuthor(e.target.value)} placeholder='Enter Author Name' name="author"/>
       </div>
       <div className='form-group'>
        <label htmlFor='image'>Image URL:</label>
        <input type='text' id="image" onChange={(e) => setImageUrl(e.target.value)} placeholder='Enter Image' name="image"/>
       </div>
      
       <button className='btn-submit'>Add Image</button>
        </form>
    </div>
  )
}

export default AddBook
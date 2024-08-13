import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/AddStudent.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`${window.location.origin}/book/book/`+id)
        .then(res => {
            // console.log(res)
            setName(res.data.name);
            setAuthor(res.data.author);
            setImageUrl(res.data.imageUrl);
        })
        .catch (err => console.log(err))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${window.location.origin}/book/book/`+id, {name, author, imageUrl})
        .then(res => {
            if(res.data.updated) {
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
       <h2>Edit Book</h2>
       <div className='form-group'>
        <label htmlFor='book'>Book Name:</label>
        <input type='text' id="book" value={name} onChange={(e) => setName(e.target.value)} placeholder='Book Name' name="book"/>
       </div>
       <div className='form-group'>
        <label htmlFor='author'>Author Name:</label>
        <input type='text' id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter Author Name' name="author"/>
       </div>
       <div className='form-group'>
        <label htmlFor='image'>Image URL:</label>
        <input type='text' id="image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Enter Image' name="image"/>
       </div>
      
       <button className='btn-submit'>Add</button>
        </form>
    </div>
  )
}

export default EditBook
import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/AddStudent.css';
import { useNavigate } from 'react-router-dom';
const AddStudent = () => {
    const [roll, setRoll] = useState('');
    const [username, setUsername] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${window.location.origin}/student/register`, {roll, username, grade, password})
        .then(res => {
            if(res.data.registered){
             navigate('/dashboard');
            }
            console.log(res);
        })
        .catch (err => console.log(err))

    }

  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
       <h2>Add Student</h2>
       <div className='form-group'>
        <label htmlFor='roll'>Roll No:</label>
        <input type='text' id="roll" onChange={(e) => setRoll(e.target.value)} placeholder='Enter Roll No' name="roll"/>
       </div>
       <div className='form-group'>
        <label htmlFor='roll'>User Name:</label>
        <input type='text' id="username" onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' name="username"/>
       </div>
       <div className='form-group'>
        <label htmlFor='roll'>Grade :</label>
        <input type='text' id="grade" onChange={(e) => setGrade(e.target.value)} placeholder='Enter Grade' name="grade"/>
       </div>
       <div className='form-group'>
        <label htmlFor='roll'>Password:</label>
        <input type='text' id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name="password"/>
       </div>
       <button className='btn-submit'>Register</button>
        </form>
    </div>
  )
}

export default AddStudent
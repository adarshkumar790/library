import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Dashboard.css';
function Dashboard() {
  const [students, setStudents] = useState([])
    const [books, setBooks] = useState([])
    const [admins, setAdmins] = useState([])

  useEffect (() => {
    axios.get(`${window.location.origin}/dashboard`)
    .then(res => {
      if(res.data.ok) {
        setStudents(res.data.student)
        setBooks(res.data.book)
        setAdmins(res.data.admin)
      }
    }).catch (err => console.log(err))
  }, [])
  return (
    <div className='dashboard'>  
     <div className='dashboard-box'>
      <h2>Total Books</h2> <br/>
      <h2>{books}</h2>
     </div>
     <div className='dashboard-box'>
      <h2>Total Students</h2> <br/>
      <h2>{students}</h2>
     </div>
     <div className='dashboard-box'>
      <h2>Total Admins</h2> <br/>
      <h2>{admins}</h2>
     </div>
    </div>
  )
}

export default Dashboard;
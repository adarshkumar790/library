import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({setRole}) {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${window.location.origin}/auth/logout`)
    .then(res => {
      if(res.data.logout){
        setRole('')
         navigate('/');
      }
    })
    .catch(err => console.log(err))
  }, [])
}

export default Logout
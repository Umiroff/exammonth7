import React, { useState } from 'react'
import '../sign-up/SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'


function SignUp() {
  const [username, setUsername] = useState('Admin')
  const [password, setPassword] = useState('admin123')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = [username, password]
    if (username === 'Admin' && password === 'admin123') {
      localStorage.setItem('token', JSON.stringify(user))
      navigate('/admin')
    } else {
      navigate('/')
    }
    
  }

  return (
    <div className='log'>
      <Navbar/>
      <form onSubmit={handleSubmit} className='log_form'>
        <input className='log_inp' value={username} onChange={((e)=> setUsername(e.target.value))} type="text" />
        <input className='log_inp' value={password} onChange={((e)=> setPassword(e.target.value))} type="password" />
        <button className='log_btn'>Sign Up</button>
      </form>
      <Footer/>
    </div>
  )
}

export default SignUp
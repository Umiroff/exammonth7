import React, { useState } from 'react'
import '../sign-up/SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const AUTH_URL = "https://fakestoreapi.com"

function SignUp() {
  const [username, setUsername] = useState('mor_2314')
  const [password, setPassword] = useState('83r5^_')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {username, password}
    axios.post(`${AUTH_URL}/auth/login`, user)
      .then(res => {
        console.log('response')
        localStorage.setItem('token', res.data.token)
    })
    navigate('/admin')
  }

  return (
    <div className='log'>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <input className='log_inp' value={username} onChange={((e)=> setUsername(e.target.value))} type="text" />
        <input className='log_inp' value={password} onChange={((e)=> setPassword(e.target.value))} type="password" />
        <button className='log_btn'>Login</button>
      </form>
      <Footer/>
    </div>
  )
}

export default SignUp
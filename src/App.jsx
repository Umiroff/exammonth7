import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import SignUp from './pages/sign-up/SignUp'
import Users from './pages/users/Users'
import Liked from './pages/liked/Liked'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<h2>404</h2>}/>
        <Route path='/wishlist' element={<Liked/>}/>
      </Routes>
    </>
  )
}

export default App

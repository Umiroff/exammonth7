import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/sign-up/SignUp'
import Liked from './pages/liked/Liked'
import Single from './pages/single/Single'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='*' element={<h2>404</h2>}/>
        <Route path='/wishlist' element={<Liked/>}/>
        <Route path='/product/:id' element={<Single/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

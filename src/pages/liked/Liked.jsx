import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Favorites from '../../components/favorites/Favorites'
import '../liked/Liked.css'

function Liked() {
  return (
    <>
    <div className='liked'>
        <Navbar/>
        <Favorites/>
        <Footer/>    
    </div>
    </>
  )
}

export default Liked
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import '../single/Single.css'
import SinglePro from '../../components/singlepro/SinglePro'

function Single() {
  return (
    <>
    <div className='single'>
        <Navbar />
        <SinglePro/>
        <Footer />
    </div>
    </>
  )
}

export default Single
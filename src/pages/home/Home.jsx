import React from 'react'
import Categories from '../../components/categories/Categories'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import '../home/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Categories/> 
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
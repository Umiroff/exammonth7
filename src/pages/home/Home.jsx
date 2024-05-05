import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import '../home/Home.css'

const Home = () => {
  const title= 'Best Sellers'
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Products title={title}/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
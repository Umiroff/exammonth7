import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import '../home/Home.css'
import { useGetProductQuery } from '../../context/productApi'

const Home = () => {
  const [limit, setlimit] = useState(8)
  let {data} = useGetProductQuery({limit: limit, count: 4})
  const title= 'Best Sellers'
  const loading = 'LOAD MORE'

  const handleLoadMore = (e) => {
    e.preventDefault()
    setlimit(limit+8)
  }

  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Products title={title} data={data?.products} handleLoadMore={handleLoadMore} limit={limit} loading={loading}/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
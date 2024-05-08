import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Basket from '../../components/basket/Basket'

function Cart() {
  return (
    <div>
        <Navbar />
        <Basket/>
        <Footer />
    </div>
  )
}

export default Cart
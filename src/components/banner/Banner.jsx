import React from 'react'
import '../banner/Banner.css'
import shoe from '../../assets/shoe.svg'

function Banner() {
  return (
    <>
        <div className='banner'>
            <h2>Adidas Men Running <br />Sneakers</h2>
            <p>Performance and design. Taken right to the edge.</p>
            <a href="">Shop now</a>
            <img src={shoe} alt="" />
        </div>
    </>
  )
}

export default Banner
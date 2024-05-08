import React, { memo } from 'react'
import '../hero/Hero.css'
import backImg from "../../assets/back-img.svg";

function Hero() {
  return (
    <>
        <div className='hero'>
            <img src={backImg} alt="" />
            <h2>Super Flash Sale <br />50% Off</h2>
        </div>
    </>
  )
}

export default memo(Hero)
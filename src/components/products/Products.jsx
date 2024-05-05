import React, { useEffect, useState } from 'react'
import '../products/Products.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';




function Products({title}) {


  return (
    <>
    <div className='cards_top'>
        <h2 className='cards_text'>{title}</h2>
        <ul>
            <Link className='cards_all'>
            <li>All</li>
            </Link>
            <li>Bags</li>
            <li>Sneakers</li>
            <li>Belt</li>
            <li>Sunglasses</li>
        </ul>
    </div>
    <div className='cards'>
        
    </div>
    </>
  )
}

export default Products
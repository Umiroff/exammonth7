import React, { memo, useEffect, useState } from 'react'
import '../products/Products.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductQuery } from '../../context/productApi';
import { Rating } from '@mui/material';
import { toggleToWishes } from '../../context/wishlistSlice';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";


function Products({title, data, handleLoadMore, limit, loading, loadName}) {
  let {isLoading} = useGetProductQuery({limit: limit, count: 4})
  const i = useSelector(reducer => reducer.wishlist.value)
  const dispatch = useDispatch()

  let items = data?.map((el) => (
    <div key={el.id} className='card'>
      <div className='card_img'>
        <img src={el.thumbnail} alt="" />
      </div>
      <h2>{el.title}</h2>
      <Rating className='card_stars' name="read-only" value={el.rating} readOnly />
      <h3>$ {el.price}</h3>
      <p>{el.discountPercentage} % off</p>
      <div className='card_btns'>
      <button className='card_like' onClick={() => dispatch(toggleToWishes(el))}>
            {
                i.some(l => l.id === el.id) ? 
                <FaHeart className='like_icon' />
                : <FaRegHeart className='like_icon'/>
            }
        </button>
        <button className='card_cartbtn'>
          <FiShoppingCart className='cart_icon'/>
        </button>
        <button className='card_infobtn'>
        <Link to={`/product/${el.id}`}>
          <FaRegEye className='info_icon'/>
        </Link>
        </button>
      </div>
    </div>
  ))

  


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
      {isLoading ? <div className={`${loadName}`}></div> : <></>}
        {items}
    <p onClick={handleLoadMore} className='cards_loadmore'>{loading}</p>
    </div>
    </>
  )
}

export default memo(Products)
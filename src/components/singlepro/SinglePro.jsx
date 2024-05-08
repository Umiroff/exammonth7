import React from 'react'
import '../singlepro/SinglePro.css'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/productApi';
import { Button, Radio, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleToWishes } from '../../context/wishlistSlice';

function SinglePro() {
    const product = useParams()
    const id = product?.id
    const {data, isLoading} = useGetProductByIdQuery(id)
    const i = useSelector(reducer => reducer.wishlist.value)
    const dispatch = useDispatch()

  return (
    <>
    {
      isLoading ? <div className='cards_loader'></div> :
    
    <div className='singlepro'>

      <div className='sin_imgs'>
        <img src={data?.thumbnail} alt="" className='sin_imgs_main'/>
        <img src={data?.images[0]} alt="" className='sin_imgs_img'/>
        <img src={data?.images[1]} alt="" className='sin_imgs_img'/>
        <img src={data?.images[2]} alt="" className='sin_imgs_img'/>
        <img src={data?.images[3]} alt="" className='sin_imgs_img'/>
      </div>

      <div className='sin_texts'>
        <h2>{data?.title}</h2>

        <div className='sin_texts_rating'>
          <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
          <p>0 reviews</p>
          <a href="">Submit a review</a>
        </div>

        <div className='sin_texts_price'>
          <h3>$ {data?.price}</h3>
          <p>{data?.discountPercentage} % off</p>
        </div>

        <div className='sin_texts_acf'>
          <p>Availability: In stock</p>
          <p>Category: {data?.category}</p>
          <p>Free shipping</p>
        </div>

        <div className='sin_texts_clr'>
          <p>Select color : </p>
          <Radio  style={{color: 'blue'}}/>
          <Radio  style={{color: 'red'}}/>
          <Radio  style={{color: 'black'}}/>
          <Radio  style={{color: 'yellow'}}/>
        </div>

        <div className='sin_texts_size'>
          <p>Size : </p>
          <select name="" id="">
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
          </select>
        </div>

        <div className='sin_texts_btns'>
        <Button variant="outlined">Add to cart</Button>
        <button className='sin_text_btns_like'  onClick={() => dispatch(toggleToWishes(data))}>
            {
                i.some(l => l.id === data?.id) ? 
                <FaHeart className='like_icon' />
                : <FaRegHeart className='like_icon'/>
            }
        </button>
        </div>
      </div>

      <div className='sin_des'>
        <h3>Product Information</h3>
        <p>{data?.description}</p>
      </div>
    </div>
}
    </>
  )
}

export default SinglePro
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import '../favorites/Favorites.css'
import colors from '../../assets/colors.svg'
import Navbar from '../navbar/Navbar';
import Products from '../products/Products';
import Empty from '../empty/Empty';

function Favorites() {
  const wishes = useSelector(state => state.wishlist.value)
    console.log(wishes);


  return (
    <>
        {
        wishes.length ? 
        <Products title="Wishlist" data={wishes}/>
        :
        <Empty/>
        // <EmptyWishes/>
      }
    </>
  )
}

export default Favorites
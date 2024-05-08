import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import '../favorites/Favorites.css'
import Products from '../products/Products';
import Empty from '../empty/Empty';

function Favorites() {
  const wishes = useSelector(state => state.wishlist.value)


  return (
    <>
      {
        wishes.length ? 
        <Products title="Wishlist" data={wishes}/>
        :
        <Empty/>
      }
    </>
  )
}

export default memo(Favorites)
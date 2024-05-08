import React from 'react'
import '../navbar/Navbar.css'
import { FaSearch } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import  logo  from "../../assets/Icon.svg";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
    <div className='nav'>
        <select name="" id="" className='nav_sel1'>
            <option value="ENG">Eng</option>
            <option value="UZ">Uz</option>
        </select>
        <select name="" id="" className='nav_sel2'>
            <option value="USD">Usd</option>
            <option value="UZS">Uzs</option>
        </select>
        <Link className='nav_my' to={'/sign-up'}>
        <MdPersonOutline className='nav_i'/>
        </Link>        
        <Link to={'/wishlist'}>
        <FaHeart className='nav_like'/>
        </Link>
        <p>items $0.00</p>
        <FaSearch className='nav_search'/>

        <Link to={'/'}>
        <img src={logo} alt="" className='nav_logoimg'/>
        <h2 className='nav_logo'>E-Comm</h2>
        </Link>

        <ul className='nav_bar'>
          <Link to={'/'} className='nav_home'>
          <li >HOME</li>
          </Link>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
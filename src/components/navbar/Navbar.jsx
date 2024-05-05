import React from 'react'
import '../navbar/Navbar.css'
import { FaSearch } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
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
        <button className='nav_my'><GoPersonFill className='nav_i'/> My profile</button>
        <Link to={'/favorites'}>
        <FaHeart className='nav_like'/>
        </Link>
        <p>items $0.00</p>
        <FaSearch className='nav_search'/>

        <img src={logo} alt="" className='nav_logoimg'/>
        <h2 className='nav_logo'>E-Comm</h2>

        <ul className='nav_bar'>
          <Link to={'/'}>
          <li className='nav_home'>HOME</li>
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
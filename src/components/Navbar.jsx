import React from 'react'
import './navbar.css'
import { IoIosSearch } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_h">
        <span className="h">h</span>
        <div className="hobby_cnt">
            <span className="blue">hobbye<span className="purple">cue</span></span>
            <span className="community">your hobby ,your community</span>
        </div>
      </div>
      <div className="navbar_input">
        <input placeholder='search here'></input>
        <IoIosSearch color="purple" />
      </div>
      <FaBell className="active"  color="purple" />
      <FaBars className="active" color="purple"/>

      <div className="navbarflex">
        <MdExplore color="purple" />
        <span>Explore</span>
      </div>
      <div className="navbarflex">
      <FaShieldHeart color="purple" />
        <span>Hobbies</span></div>
      <div className="navbarflexbar">
      <FaBookmark color="purple" />
      <FaBell color="purple" />
      <FaShoppingCart color="purple" />
      </div>
      <button className="navbarbtn">Sign in</button>
    </div>
  )
}

export default Navbar

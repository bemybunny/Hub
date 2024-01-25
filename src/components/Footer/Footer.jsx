import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div >
        <div className="footercnt">
      <div className="footercntbox">
        <span className="footerbold">Hobbycue</span>
        <span>About Us</span>
        <span>Our Services</span>
        <span>Work with Us</span>
        <span>FAQ</span>
        <span>Contact Us</span>
      </div>
      <div className="footercntbox">
        <span className="footerbold">How Do I</span>
        <span>Sign Up</span>
        <span>Add a Listing</span>
        <span>Post a Query</span>
        <span>Add a Blog Post</span>
        <span>Other Queries</span>
      </div>
      <div className="footercntbox">
        <span className="footerbold">Quick Links</span>
        <span>Listings</span>
        <span>Blog Posts</span>
        <span>Shop / Store</span>
        <span>Community</span>
      </div>
      <div className="footercntbox">
        <span className="footerbold">Social Media</span>
        <div className="footerflex">
            <FaFacebook color="grey"/>
            <FaTwitter color="grey"/>
            <FaInstagramSquare color="grey"/>
            <FaPinterest color="grey"/>
            <FaGooglePlusG color="grey"/>
            <FaYoutube color="grey"/>
            <FaTelegram color="grey"/>
            <MdEmail color="grey"/>
        </div>
        <div>
            <span>Invite Friends</span>
            <div className="footerdiv">
            <input className="footerinput" placeholder='Email Id'></input>
            <span className="invite">Invite</span>
            </div>
        </div>
      </div>
      </div>
      <div className="footercues">
        <span>Purple Cues Private Limited</span>
      </div>
    </div>
  )
}

export default Footer

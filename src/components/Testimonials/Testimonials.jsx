import React from 'react'
import Vector from '../assets/Vector.png'
import Ellipse24 from '../assets/Ellipse24.png'
import Ellipse26 from '../assets/Ellipse26.png'
import Ellipse25 from '../assets/Ellipse25.png'
import arrow from '../assets/arrow.png'
import mic from '../assets/mic.png'
import line from '../assets/line.png'
import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_heading">
        <img src={Vector} alt=""/>
        <span>Testimonials</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe voluptatibus ipsum harum, sit cupiditate, placeat quidem, officiis odio quae consectetur. Odio non iusto voluptate quo, id reiciendis sapiente corporis nesciunt quisquam? Dolor nihil officia quos maxime expedita rem sapiente accusamus eaque! Nemo, iure deleniti.
      </p>

      <div className="lightpurple">
        <div className="purplebackground">
            <div>
                <img src={Ellipse24} alt=""/>
                <img className="adjust" src={arrow} alt=""/>
            </div>
            <div>
                <img src={Ellipse25} alt=""/>
                <img className="adjustline" src={line} alt=""/>
            </div>
            <div>
                <img className="adjustmic" src={mic} alt=""/>
                <img src={Ellipse26} alt=""/>
            </div>
        </div>
        <div className="classical">
           <img src={Ellipse26} alt=""/>
           <div className="classicalheading">
            <span className="npurple">Shubha Nagarajan</span>
            <span className="nblue">Classical Dancer</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

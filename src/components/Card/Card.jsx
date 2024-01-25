import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import './Card.css'
import { FaCalendarCheck } from "react-icons/fa";
const Card = () => {
  return (
    <div className="cardcontainer">
      <div className="card-flex">
        <div className="cardbox" >
          <div className="cardheading">
            <IoPeopleSharp color="purple"/>
            <span>People</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum vitae neque pariatur quibusdam voluptate repellendus, obcaecati nam libero voluptatum iusto odit ea vero ducimus   </p>
          <button className="card-btn">Connect</button>
        </div>
        <div className="cardbox" >
          <div className="cardheading">
            <MdPlace color="green" />
            <span>Place</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum vitae neque pariatur quibusdam voluptate repellendus, obcaecati nam libero voluptatum iusto odit ea vero ducimus   </p>
          <button className="card-btn">Connect</button>
        </div>
      </div>
      <div className="card-flex">
        <div className="cardbox"> 
            <div className="cardheading">
                <MdProductionQuantityLimits color="brown" />
                <span>Product</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum vitae neque pariatur quibusdam voluptate repellendus, obcaecati nam libero voluptatum iusto odit ea vero ducimus   </p>
            <button className="card-btn">Connect</button>
            </div>
            <div className="cardbox">
            <div className="cardheading">
                <FaCalendarCheck color="blue"/> 
                <span>Program</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum vitae neque pariatur quibusdam voluptate repellendus, obcaecati nam libero voluptatum iusto odit ea vero ducimus   </p>
            <button className="card-btn">Connect</button>
            </div>
      </div>
    </div>
  )
}

export default Card

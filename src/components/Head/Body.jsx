import React from 'react'
import people from '../assets/people.png'
import './body.css'

const Body = () => {
  return (
    <div className="body-cnt">
      <span className="body_heading">Explore your <span className="blue">hobby</span>  or <span className="purple">passion</span></span>
      <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt fugiat nemo unde, similique, natus facere, voluptatem eius quis vitae libero quas explicabo iure odit! Provident fuga voluptas recusandae esse tempore, perspiciatis qui culpa voluptate!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam esse, ut maxime ratione distinctio debitis laboriosam expedita. Voluptatum earum laboriosam nam ullam eveniet.</p>
      <img src={people} alt=""/>
    </div>
  )
}

export default Body

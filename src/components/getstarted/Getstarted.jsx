import React from 'react'
import './Getstarted.css'
import Group99 from '../assets/Group99.png'
const Getstarted = () => {
  return (
    <div className="Getstarted">
       <span>You <span className="purple">Hobby</span>, Your <span className="blue">Community...</span> </span>
       <button>Get started</button>
       <img src={Group99} alt=""/>
    </div>
  )
}

export default Getstarted

import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import './Addown.css'
const Addown = () => {
  return (
    <div className="addown">
      <div className="addownCnt">
        <FaPlusCircle color="blue" />
        <span>Add your own</span>
      </div>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam error natus distinctio assumenda neque aliquid at aut, ut, quaerat quos hic delectus voluptates labore ullam, ducimus mollitia inventore animi voluptatibus nihil repudiandae. Molestias eaque assumenda corrupti neque fugit unde quas ratione! Voluptatum nihil beatae accusamus.</span>
      <button>Add new</button>
    </div>
  )
}

export default Addown

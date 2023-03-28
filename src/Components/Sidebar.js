import React from 'react'
import { MdHomeFilled,MdMessage } from "react-icons/md";
import {FaVideo} from "react-icons/fa"
import "../styles/Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="active">
        <MdHomeFilled/>
        </div>
        <MdMessage/>
        <FaVideo/>
    </div>
  )
}

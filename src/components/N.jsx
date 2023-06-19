import {logo,nav} from "../assets"
import React from 'react'
import {useState} from 'react';

const N = () => {
    const [toggle,settoggle] =useState(false);

 const toggleMenu = () => {
    return settoggle
        (!toggle);
 }  
  return (
    <nav className="class">
     <div className="flex flex-grow">
        <div className=" justify-start">1</div>
        <div className=" justify-end h-auto w-auto bg-cyan-700 rounded-md">
            <button className="class" onclick={toggleMenu}>
                <img src={nav} alt="" className="class" /></button>
            
        </div>
     </div>
    </nav>
  )
}

export default N

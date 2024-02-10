import React from 'react'
import { useState } from 'react';
import './navbar.css'
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md"
import { TbGridDots } from "react-icons/tb";
export default function Navbar() {
   const [active, setActive] = useState('navbar')
const toggle=()=>{
    setActive('navbar activNavbar')
}
const remover=()=>{
    setActive('navbar')
}
  return (
    <section className='navbarSection'>
<header className='header flex'>
    <div className="logodiv">
        <a href="#" className='logo'>
            <h1><MdOutlineTravelExplore className='icon'/>Travel</h1>
        </a>
    </div>
    <div className={active}>
        <ul className='navbarlist flex'>
        <li className='navbaritem'>
        <a href="#" className='navlink'>Home</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>Packages</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>Shop</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>About</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>Pages</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>News</a>
        </li>
        <li className='navbaritem'>
        <a href="#" className='navlink'>Contact</a>
        </li>
        <button className='btn'>
            <a href="#">BOOK NOW</a>
        </button>
        </ul>
        <div  onClick={remover} className="closeNavbar">
        <IoIosCloseCircle className='icon' />
        </div>
    </div>
        <div onClick={toggle} className="togglenavbar">
        <TbGridDots  className='icon'/>
        </div>
</header>
    </section>
  )
}

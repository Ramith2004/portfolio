import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg' // Assuming you have a logo image in this path
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="Logo" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About ME</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar
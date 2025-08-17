import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/RC_Assets/logo.svg' // Assuming you have a logo image in this path
import underline from '../../assets/nav_underline.svg' // Assuming you have an underline image in this path
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

  const[menu,setMenu] = useState("home");

  return (
    <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <ul className="nav-menu">
            <li><AnchorLink className="anchor-link"  href="#home"><p onClick={() => setMenu("home")}>Home</p>{menu==="home"? <img src={underline} alt="underline" /> :<></>}</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p>{menu==="about"? <img src={underline} alt="underline" /> :<></>}</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={() => setMenu("project")}>My Project</p>{menu==="project"? <img src={underline} alt="underline" /> :<></>}</AnchorLink></li>
            {/* <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={() => setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"? <img src={underline} alt="underline" /> :<></>}</AnchorLink></li> */}
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p>{menu==="contact"? <img src={underline} alt="underline" /> :<></>}</AnchorLink></li>
        </ul>
        <div className="nav-connect">
           <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar
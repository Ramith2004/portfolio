import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/RC_Assets/ChatGPT Image Aug 17, 2025, 07_47_29 PM.png'
import resume from '../../../public/Ramith_Chatterjee_Resume.pdf'
const Hero = () => {
  return (
    <div id='home' className="hero">
    <img className='profile-img' src={profile_img} alt="Profile" />
    <h1><span>I am Ramith Chatterjee</span>, full stack developer based in India</h1>
    <p>I’m a full-stack developer specializing in the MERN stack. I build scalable web applications with clean code, efficient APIs, and responsive user interfaces. My focus is on turning ideas into functional products that solve real problems.</p>
    <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
            <a href={resume} download="Ramith_Chatterjee_Resume.pdf">
                My Resume
            </a>
        </div>
    </div>
    </div>
  )
}

export default Hero
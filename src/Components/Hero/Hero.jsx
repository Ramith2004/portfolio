import React from 'react'
import './Hero.css'
import profile_img from '../../assets/RC_Assets/ChatGPT Image Aug 17, 2025, 07_47_29 PM.png'
const Hero = () => {
  return (
    <div className="hero">
    <img className='profile-img' src={profile_img} alt="Profile" />
    <h1><span>I am Ramith Chatterjee</span>, full stack developer based in India</h1>
    <p>I’m a full-stack developer specializing in the MERN stack. I build scalable web applications with clean code, efficient APIs, and responsive user interfaces. My focus is on turning ideas into functional products that solve real problems.</p>
    <div className="hero-action">
        <div className="hero-connect">
            Connect With Me
        </div>
        <div className="hero-resume">
            My Resume
        </div>
    </div>
    </div>
  )
}

export default Hero
import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div id='experience' className="experience">
      <div className="experience-title">
        <h1>My Experience</h1>
        <div className="experience-underline"></div>
      </div>
      <div className="experience-container">
        <div className="experience-item">
          <div className="experience-year">2023 - 2024</div>
          <div className="experience-content">
            <h3>Full Stack Developer Intern</h3>
            <h4>Indian Railways, Bhubaneswar</h4>
            <p className="experience-description">
              Developed a Complaint Management System using React.js, Express.js, and MongoDB.
            </p>
            <ul>
              <li>Reduced complaint resolution time by 40% through automated tracking and real-time updates</li>
              <li>Built REST APIs that improved data handling efficiency by 30%</li>
              <li>Designed a responsive UI that reduced manual form-filling errors by 25%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
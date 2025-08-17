import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/RC_Assets/ChatGPT Image Aug 17, 2025, 07_47_29 PM.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <div className="about-underline"></div>
      </div>
      {/* <div className="about-image">
        <img src={theme_pattern} alt="Theme Pattern" />
      </div> */}

      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="About Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a full-stack developer with a strong focus on the MERN stack.
              I enjoy building web applications that are not only functional but
              also clean, responsive, and user-friendly. From designing
              intuitive interfaces to writing efficient backend logic, I like
              working across the entire development process.
            </p>
            <p>
              I’m always exploring new technologies and improving my skills to
              stay up to date in the fast-changing world of web development. My
              goal is to create solutions that make an impact, whether that’s
              through personal projects, collaborations, or professional work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Express.js</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievements-title">
          <h1>Achievements</h1>
          <div className="achievements-underline"></div>
        </div>
        <ul>
          <li>
            <b>Leadership Experience:</b> Head Coordinator of Imagics Club
            (PMEC’s largest art club): Led a creative team, organized events,
            and managed college-level activities.
          </li>
          <li>
            <b>Event Organization:</b> Successfully coordinated cultural and
            technical events during college fests and sports events.
          </li>
          <li>
            <b>Seminar Presentations:</b> Delivered technical talks on Node.js
            optimization, MongoDB indexing, and React Virtual DOM performance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

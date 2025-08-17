import React from 'react'
import "./MyProject.css"
import mywork_data from '../../assets/mywork_data'
const MyProject = () => {
  return (
    <div>
        <div id='project' className="myproject">
            <div className="myproject-title">
                <h1>My Projects</h1>
                <div className="myproject-underline"></div>
            </div>
            <div className="myproject-container">
                {mywork_data.map((work,index)=>{
    return (
        <div key={index} className="card" style={{width: "18rem"}}>
            <img src={work.w_img} className="card-img-top" alt="project image" />
            <div className="card-body">
                <h5 className="card-title">{work.w_name}</h5>
                <a href={work.w_url} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    )
})}

            </div>
        </div>
    </div>
    
  )
}

export default MyProject
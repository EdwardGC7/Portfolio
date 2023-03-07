import React from 'react'
import '../styles/projectsCard.css'

const ProjectsCard = (props) => {
  return (
    <div className='card_container'>
      <div className='card_img_container'><img className='card_img' src={props.imgUrl} alt="Project img" /><div className='card_fade'><h2>{props.title}</h2><p>{props.description}</p></div></div>
      
      <p>{props.title}</p>
    </div>
  )
}

export default ProjectsCard
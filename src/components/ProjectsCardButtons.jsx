import React from 'react';
import '../styles/ProjectsCardButtons.css';

const ProjectsCardButtons = ({demo, repository}) => {
  return (
    <div className='card-buttons-container'>
      <div className='card-buttons-container_button1'>Demo</div>
      <div className='card-buttons-container_button2'>Repository</div>
    </div>
  )
}

export default ProjectsCardButtons
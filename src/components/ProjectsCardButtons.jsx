import React from 'react';
import '../styles/projectsCardButtons.css';

const ProjectsCardButtons = ({demo, repository}) => {
  function handleLinkDemo() {
    window.open(demo, '_blank');
  }

  function handleLinkRepository() {
    window.open(repository, '_blank');
  }

  return (
    <div className='card-buttons-container'>
      <div onClick={handleLinkDemo} className='card-buttons-container_button1'>Demo</div>
      <div onClick={handleLinkRepository} className='card-buttons-container_button2'>Repository</div>
    </div>
  )
}

export default ProjectsCardButtons
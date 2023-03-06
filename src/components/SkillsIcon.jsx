import React from 'react'
import '../styles/skillSection.css';

const SkillsIcon = ({title, icon}) => {
  return (
    <div style={{height:'120px'}}>
      <h3 style={{color:'whitesmoke'}}>{title}</h3>
      <div  className='skills-icon'>{icon}</div>
    </div>
  )
}

export default SkillsIcon
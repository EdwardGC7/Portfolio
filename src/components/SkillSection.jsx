import React from 'react'
import '../styles/skillSection.css'
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGithub, FaDatabase } from "react-icons/fa"
import SkillsIcon from './SkillsIcon.jsx'
import redux from '../assets/redux.svg'

const SkillSection = () => {
  return (
    <div className='skill-section-container'>
      <h2 id='skills'>Skills</h2>
      <p>With a focus on delivering exceptional results, I have a deep understanding of web development tools and technologies.</p>
      <div className='skill-list'>
        {/* <SkillsIcon title='Html' icon={<FaHtml5 size={50} color={'#e04e27'}/>} />  
        <SkillsIcon title='Css' icon={<FaCss3 size={50} color={'#016fba'}/>} />
        <SkillsIcon title='JavaScript' icon={<FaJs size={50} color={'#f5dd1b'}/>} />
        <SkillsIcon title='React js' icon={<FaReact size={50} color={'#36d8fe'}/>} />
        <SkillsIcon title='Redux' icon={<img style={{with:'50%', height:'50%'}} src={redux} alt="Redux image" />} />
        <SkillsIcon title='Bootstrap' icon={<FaBootstrap size={50} color={'#5f3f8a'}/>} />
        <SkillsIcon title='Git/Github' icon={<FaGithub size={50} color={'black'}/>} />
        <SkillsIcon title='Sql' icon={<FaDatabase size={50} color={'#bdccd3'}/>} />  */}
      </div>
    </div>
  )
}

export default SkillSection
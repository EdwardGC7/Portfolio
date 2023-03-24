import React from 'react'
import CodingSvg from '../assets/coding.svg'
import '../styles/welcomeSection.css'
import { FaArrowAltCircleDown } from "react-icons/fa";
import Logo from './Logo';

const WelcomeSection = () => {
  return (
    <div className='welcome-container' >
      <div className='mobile_logo'><Logo /></div>
      <div className='welcome-section-a'>
        <div className='welcome-message'>
          Welcome to my Portfolio
        </div>
        <h1 className='presentation'>Hi! I'm Osvaldo,<span> Web Developer</span></h1>

        <div className='about-me'>
        <p >I am a passionate and dedicated web developer focused on creating beautiful and functional software. With a strong foundation in HTML, CSS, and JavaScript, as well as a deep understanding of React JS, I am equipped with a wide range of skills to meet the needs of clients. Additionally, I possess knowledge in key areas such as Git, APIs, and databases, and have completed courses in programming best practices, algorithms, and OOP. With a commitment to ongoing learning and growth, my goal is to be a valuable asset to any team.
        </p>
        </div>
        <div className='download-cv'>Download my CV <span><FaArrowAltCircleDown size={20} color={'grey'}/></span></div>
      </div>
      <div>
        <img className='welcome-container_img' src={CodingSvg} alt="Coding image" />
      </div>
    </div>
  )
}

export default WelcomeSection
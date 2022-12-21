import React from 'react'
import CodingSvg from '../assets/coding.svg'
import '../styles/welcomeSection.css'
import { FaArrowAltCircleDown } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-section-a'>
        <div className='welcome-message'>
          Welcome to my Portfolio
        </div>
        <h1 className='presentation'>Hi! I'm Osvaldo,<span> Web Developer</span></h1>

        <div className='about-me'>
        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius sapiente      eligendi tempora nesciunt facere, iusto distinctio nemo placeat accusamus soluta, omnis architecto deleniti nisi! Esse ullam aliquam distinctio aspernatur excepturi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda doloremque maiores laudantium. Debitis deleniti sed eius culpa? Sint, dignissimos?
        </p>
        </div>
        <div className='download-cv'>Download my CV <span><FaArrowAltCircleDown size={20} color={'grey'}/></span></div>
      </div>
      <div>
        <img src={CodingSvg} alt="Coding image" />
      </div>
    </div>
  )
}

export default WelcomeSection
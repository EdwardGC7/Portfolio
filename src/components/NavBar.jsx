import {React, useState} from 'react';
import '../styles/navBar.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CircularSocialBTN from './CircularSocialBTN';
import { Link } from 'react-scroll';
import Logo from './Logo';

const NavBar = ({setNavOpen}) => {


  const handleButtonClick = () => {
    if (window.innerWidth < 768) {
      setNavOpen(false);
    }
    
  };

  return (
    <div className={`navBarContainer`} onClick={handleButtonClick}>
      <div>
        <Logo/>
      </div>
      <div>
        <nav> 
          <ul className='navBarUl'>
            <li><Link onClick={handleButtonClick} to='home' className={'nav-link'} smooth offset={-70} duration={400}>Home</Link></li>
            <li><Link onClick={handleButtonClick} to='skills' className={'nav-link'} smooth offset={-80} duration={400}>Skill</Link></li>
            <li><Link onClick={handleButtonClick} to='projects' className={'nav-link'}  smooth offset={-80} duration={400}>Projects</Link></li>
            <li>
              <div className='social_icons_top'>
              <div className='social_icons'>
                <CircularSocialBTN link={'https://www.linkedin.com/in/osvaldogonzalezc/'} Iconfa={<FaLinkedinIn size={30} color={'grey'}/>}/>
                <CircularSocialBTN link={'https://m.facebook.com/100008724181409/'} Iconfa={<FaFacebookF size={30} color={'grey'}/>}/>
                <CircularSocialBTN link={'https://instagram.com/edward_gcampos?igshid=ZDdkNTZiNTM='} Iconfa={<FaInstagram size={30} color={'grey'}/>}/>
              </div>
              </div> 
            </li>
            <li >
              <Link  to='contactMe' smooth offset={-10} duration={400}><button onClick={handleButtonClick}>Contact Me</button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
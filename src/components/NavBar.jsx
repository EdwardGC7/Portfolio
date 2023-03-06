import {React, useState, useEffect} from 'react';
import '../styles/navBar.css';
import {NavLink} from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CircularSocialBTN from './CircularSocialBTN';
import { Link } from 'react-scroll';

const NavBar = () => {

  return (
    <div className='navBarContainer'>
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <nav> 
          <ul className='navBarUl'>
            <li><Link to='home' className={'nav-link'} smooth offset={-70} duration={400}>Home</Link></li>
            <li><Link to='skills' className={'nav-link'} smooth offset={-70} duration={400}>Skill</Link></li>
            <li><NavLink to='/projects' className={'nav-link'}>Projects</NavLink></li>
            <li>
              <div className='social_icons'>
                <CircularSocialBTN Iconfa={<FaLinkedinIn size={30} color={'grey'}/>}/>
                <CircularSocialBTN Iconfa={<FaFacebookF size={30} color={'grey'}/>}/>
                <CircularSocialBTN Iconfa={<FaInstagram size={30} color={'grey'}/>}/>
              </div>
            </li>
            <li>
              <button>
                Let's Connect
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
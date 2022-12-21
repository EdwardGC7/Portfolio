import {React, useState, useEffect} from 'react';
import '../styles/navBar.css';
import {NavLink} from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CircularSocialBTN from './CircularSocialBTN';

const NavBar = () => {

  return (
    <div className='navBarContainer'>
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <nav> 
          <ul className='navBarUl'>
            <li><NavLink to='/home' className={'nav-link'}>Home</NavLink></li>
            <li><NavLink to='/skills' className={'nav-link'}>Skill</NavLink></li>
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
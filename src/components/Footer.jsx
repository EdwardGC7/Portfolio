import React from 'react'
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CircularSocialBTN from './CircularSocialBTN';

const Footer = () => {
  return (
    <div className='footer_container'>
      <h1>LOGO</h1>
      <div>
      <div className='social_icons'>
          <CircularSocialBTN bColor={'white'} Iconfa={<FaLinkedinIn size={30} color={'grey'}/>}/>
          <CircularSocialBTN bColor={'white'} Iconfa={<FaFacebookF size={30} color={'grey'}/>}/>
          <CircularSocialBTN bColor={'white'} Iconfa={<FaInstagram size={30} color={'grey'}/>}/>
      </div>
      <p>Copyright 2023. All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
import React from 'react'
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CircularSocialBTN from './CircularSocialBTN';
// import btLogo from '../assets/btLogo.jpg'

const Footer = () => {
  return (
    <div className='footer_container'>
      {/* <h1>LOGO</h1> */}
      <div className='footer-logo'><img src={'/btLogo.jpg'} alt="Footer image" /></div>
      <div>
      <div className='social_icons'>
          <CircularSocialBTN bColor={'white'} link={'https://www.linkedin.com/in/osvaldogonzalezc/'} Iconfa={<FaLinkedinIn size={30} color={'grey'}/>}/>
          <CircularSocialBTN bColor={'white'} link={'https://m.facebook.com/100008724181409/'} Iconfa={<FaFacebookF size={30} color={'grey'}/>}/>
          <CircularSocialBTN bColor={'white'} link={'https://instagram.com/edward_gcampos?igshid=ZDdkNTZiNTM='} Iconfa={<FaInstagram size={30} color={'grey'}/>}/>
      </div>
      <p>Copyright 2023. All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
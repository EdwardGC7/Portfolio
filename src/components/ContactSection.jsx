import React from 'react'
import MailSvg from '../assets/mail.svg'
import '../styles/contactSection.css'

const ContactSection = () => {
  return (
    <div className='contact_container'>
      <div><img className='contact_img' src={MailSvg} alt="mail-img" /></div>
      <div className='contact_form'></div>
    </div>
  )
}

export default ContactSection
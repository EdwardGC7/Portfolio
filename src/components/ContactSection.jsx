import React from 'react'
import MailSvg from '../assets/mail.svg'
import '../styles/contactSection.css'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <div className='contact_container'>
      <div><img className='contact_img' src={MailSvg} alt="mail-img" /></div>
      <div id='contactMe' className='contact_form'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default ContactSection
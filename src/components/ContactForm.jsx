
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfcv9zm', 'template_yoogw8n', form.current, 'VU-SS7zuHtODo8F5r')
      .then((result) => {
          // console.log(result.text);
          setShowAlert(true);
      }, (error) => {
          console.log(error.text);
      });

  };
   
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
  };
  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
  };

  const handleCloseAlert = () => {
    setName('');
    setEmailAddress('');
    setMessage('');

    setShowAlert(false);
  };



  return (
    <>
    <div>
      {showAlert && (
        <div className='alert-container'>
          <div className="custom-alert">
            <h2>Thanks!!!</h2>
            <p>We'll be in contact soon.</p>
            <button onClick={handleCloseAlert}>Close</button>
          </div>
        </div>
    )}
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact me</h2>
      <input placeholder='Full Name' className='input_element' type="text" id="name" name="user_name" value={name} onChange={handleNameChange} />
      <input placeholder='Email Address' className='input_element' type="email" id="emailAddress" name="user_email" value={emailAddress} onChange={handleEmailAddressChange} />
      <textarea placeholder='Message' className='input_element' id="message" name="message" value={message} onChange={handleMessageChange} />
      <button type="submit" value="Send">Send</button>
    </form>
    </>
  );
}


export default ContactForm;
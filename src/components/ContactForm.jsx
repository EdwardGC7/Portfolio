
import React, { useState } from 'react';

const ContactForm = () => {
   
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

  // Define an event handler that will be called when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact me</h2>
      <input placeholder='Full Name' className='input_element' type="text" id="name" value={name} onChange={handleNameChange} />
      <input placeholder='Email Address' className='input_element' type="text" id="emailAddress" value={emailAddress} onChange={handleEmailAddressChange} />
      <textarea placeholder='Message' className='input_element' id="message" value={message} onChange={handleMessageChange} />
      <button type="submit">Send</button>
    </form>
  );
}


export default ContactForm;
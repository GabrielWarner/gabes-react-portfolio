import React from 'react'
import '../../styles/Contact.css';
import { useState } from 'react';
import {  validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    // Based on the input type, we set the state of either email, name or message
    if (inputType === 'email') {
      
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }

  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage(`email must include '@' and/or '.com'`);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thank you for your submission! I will get back to you within 24 hours. Thank you!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };
  return (
    <div className='contact'>
    <form className="form avatar animate__animated animate__bounce">
      <h1 style={{textAlign:"center"}}>Contact Me</h1>
    <Form.Label>Email</Form.Label>
      <Form.Control
        value={email}
        name="email"
        onChange={handleInputChange}
        onBlur={(e)=>{
          if(!e.target.value){
            setErrorMessage(`text is required`)
          }
        }}
        type="email"
       
      />
      <Form.Label>Name</Form.Label>
      <Form.Control
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        onBlur={(e)=>{
          if(!e.target.value){
            setErrorMessage(`text is required`)
          }
        }}
        
      />
      <Form.Label>Message</Form.Label>
      <Form.Control
        value={message}
        name="message"
        onChange={handleInputChange}
        as="textarea"
        onBlur={(e)=>{
          if(!e.target.value){
            setErrorMessage(`text is required`)
          }
        }}
       
      />
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
      <button className='button-19' type="button" onClick={handleFormSubmit}>Submit</button>
    </form>
  </div>
  )
}

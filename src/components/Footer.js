
import * as React from 'react';
import '../styles/Footer.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (

      <div className='footer' maxidth="sm">

        <a className='link' target='_blank' href='https://github.com/GabrielWarner'>
        <GoMarkGithub className='link' size="2em"/>
        </a>

        <a className='link' target='_blank' href='https://www.linkedin.com/in/gabriel-warner-083ab4211/'>
        <AiFillLinkedin className='link' size="2em"/>
        </a>
      </div>
    
    
  
  )
}

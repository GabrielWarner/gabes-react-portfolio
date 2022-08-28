
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../styles/Footer.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (

      <div className='footer' maxidth="sm">
        <Typography variant="body1">
          Gabriel Warner
        </Typography>

        <a className='footer-link' target='_blank' href='https://github.com/GabrielWarner'>
        <GoMarkGithub size="2em"/>
        </a>

        <a className='footer-link' target='_blank' href='https://www.linkedin.com/in/gabriel-warner-083ab4211/'>
        <AiFillLinkedin size="2em"/>
        </a>
      </div>
    
    
  
  )
}

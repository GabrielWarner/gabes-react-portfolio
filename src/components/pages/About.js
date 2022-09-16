import React from 'react'
import { Avatar } from '@mui/material';

import '../../styles/About.css';

export default function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <Avatar className=' animate__animated animate__bounce'
        alt="Gabriel Warner"
        src="/images/myface.png"
        sx={{ width: 200, height: 200 }}
        />
        <h1 className=' about-title animate__animated animate__fadeInRight'>Hi, Im Gabriel<br></br> A Web Developer</h1>
        <p className='about-text animate__animated animate__fadeInLeft'>
        Currently attending the University of Washington Tacoma working towards my Bachelor of Science in Information Technology, graduating in May of 2023.

Currently looking for an internship as a software developer.

Recently Graduated from the University of Washington Full Stack Web Developer Bootcamp where I became proficient in Javascript, HTML, CSS, React, Boostrap, Node.js, Express, MySQL, MongoDB, and Handlebars. A proven team player who is creative and an effective communicator.  
        </p>
      </div>
      
    </div>
  )
}

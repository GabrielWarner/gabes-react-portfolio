import React from 'react'
import { Divider } from '@mui/material';
import { Typography, Avatar } from '@mui/material';

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
        <h1 className=' about-title animate__animated animate__fadeInRight'>Hi, Im Gabriel<br></br> A Software Engineer</h1>
        <p className='about-text animate__animated animate__fadeInLeft'>
          Hello, My name is Gabriel Warner and I am a student at the University of Washinton Tacoma, Im a Senior whose about to graduate with a Bachelors of Science in Information Technology.
        </p>
      </div>
      
    </div>
  )
}

import React from 'react'
import { Divider } from '@mui/material';
import { Typography, Avatar } from '@mui/material';

import '../../styles/About.css';

export default function About() {
  return (
    <div className='about'>
      
        <Avatar className='avatar'
        alt="Gabriel Warner"
        src="/images/myface.png"
        sx={{ width: 200, height: 200 }}
        />
        <h1>Hi, Im Gabriel<br></br> A Software Engineer</h1>
        <Typography className='about-text'>
          Hello, My name is Gabriel warner and I am a student at the University of Washinton Tacoma, Im a Senior whose about to graduate with a Bachelors of Science in Information Technology.
        </Typography>
        
      
    </div>
  )
}

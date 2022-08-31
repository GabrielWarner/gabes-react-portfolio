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
          Im currently a student at the University of Washington Tacoma with one more year to graduate until I recieve my Bachelors of Science in Information Technology. I was born in Hawaii and have played video games professionaly when I was younger. I love to hike, build computers and go to the gym, Im currently down almost 90lbs from when I first started! Im a very competitive person at heart who loves to problem solve and be creative when building things.  
        </p>
      </div>
      
    </div>
  )
}

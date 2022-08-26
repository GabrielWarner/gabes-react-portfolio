import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import '../../styles/About.css';

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Typography>
          Hello, My name is Gabriel warner and I am a student at the University of Washinton Tacoma, Im a Senior whose about to graduate with a Bachelors of Science in Information Technology.
        </Typography>
      </Container>
    </div>
  )
}

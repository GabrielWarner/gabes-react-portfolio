
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../styles/Footer.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer() {
  return (

      <div className='footer' maxWidth="sm">
        <Typography variant="body1">
          Gabriel Warner
        </Typography>
        <Copyright />
      </div>
    
    
  
  )
}

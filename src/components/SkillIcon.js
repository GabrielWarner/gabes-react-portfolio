import '../styles/SkillIcon.css';
import Avatar from '@mui/material/Avatar';
import React from 'react'

export default function SkillIcon(props) {
  return (
    <Avatar
  alt={props.name}
  src={props.img}
  sx={{ width: 56, height: 56 }}
/>
  )
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/ProjectCard.css';
import { Divider } from '@mui/material';

export default function ProjectCard(props) {
  if(props.deployed){

    return (
      <Card style={{backgroundColor: 'rgba(255, 255, 255, .15)', backdropFilter: "blur(5px)", borderRadius:"50px" }}  sx={[{ maxWidth: 345, textAlign:"left",}]}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.img}
        style={{ borderTopLeftRadius:"50px"}}
      />
      <CardContent>
        <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography style={{color:"white"}} variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <a style={{color:"white", textDecoration:"underline"}} target='_blank' href={props.repo}>Github Repo</a>
        <Divider orientation="vertical" flexItem />
        <a style={{color:"white", textDecoration:"underline"}} target='_blank' href={props.deployed}>Deployed Link</a>
      </CardActions>
    </Card>
    )
  } else{
    return (
      <Card style={{backgroundColor: 'rgba(255, 255, 255, .15)', backdropFilter: "blur(5px)",borderRadius:'50px' }} sx={{ maxWidth: 345, textAlign:"left" }}>
      <CardMedia
      style={{ borderTopLeftRadius:"50px"}}
        component="img"
        alt="green iguana"
        height="200"
        image={props.img}
      />
      <CardContent>
        <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography style={{color:"white"}} variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <a style={{color:"white", textDecoration:"underline", textAlign:"center"}} target='_blank' href={props.repo}>Github Repo</a>
        <a style={{color:"white", textDecoration:"underline", textAlign:"center"}} target='_blank' href={props.demo}>Live Demo</a>
      </CardActions>
    </Card>
    )
    
  }
}

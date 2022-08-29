import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/ProjectCard.css';

export default function ProjectCard(props) {
  if(props.deployed){

    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><a target='_blank' href={props.repo}>Github Repo</a></Button>
        <Button size="small"><a target='_blank' href={props.deployed}>Deployed Link</a></Button>
      </CardActions>
    </Card>
    )
  } else{
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><a target='_blank' href={props.repo}>Github Repo</a></Button>
      </CardActions>
    </Card>
    )
    
  }
}

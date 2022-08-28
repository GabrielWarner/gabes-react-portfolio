import React from 'react'
import '../../styles/Projects.css';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <div className='project-container' >
<div className='container'>
      <h1>My Project</h1>
<div class="row">
    <div class="col center-block aligncard1">
        <ProjectCard
        className='center'  add
        img='/images/vivachat.jpg' 
        name='Viva Chat' 
        description='A peer to peer video chat app using Socket IO and PeerJS'
        repo='https://github.com/brownj47/random-video-chat'
        deployed='https://vivachat.herokuapp.com/'></ProjectCard>
    </div>
    <div class="col center-block aligncard1">
    <ProjectCard
        className='center' 
        img='/images/breedfinder.jpg' 
        name='Cute or Not' 
        description='A Dog or Cat breed finder with a mini game "Cute or Not" where you decide which puppy is cutest!'
        repo='https://github.com/GabrielWarner/cute-and-cuddly'
        deployed='https://gabrielwarner.github.io/cute-and-cuddly/'></ProjectCard>
    </div>
    <div class="col center-block aligncard1">
    <ProjectCard
        className='center' 
        img='/images/weather.jpg' 
        name='Weather' 
        description='A weather app that lets users check the weather in any location'
        repo='https://github.com/GabrielWarner/module-challenge-6'
        deployed='https://gabrielwarner.github.io/module-challenge-6/'></ProjectCard>
    </div>
</div>
<div class="row">
    <div class="col center-block aligncard1">
        <ProjectCard
        className='center' 
        img='/images/socialnetwork.jpg' 
        name='Social Network API' 
        description='An API created to mock a social media website with Users,thoughts, and reactions. Created with Mongo DB.'
        repo='https://github.com/GabrielWarner/social-network-api'
        deployed='https://github.com/GabrielWarner/social-network-api'></ProjectCard>
    </div>
    <div class="col center-block aligncard1">
    <ProjectCard
        className='center' 
        img='/images/eccomerce.jpg' 
        name='Eccomerce Backend API' 
        description='An API to keep track of inventory for a merchandise store.'
        repo='https://github.com/GabrielWarner/ecommerce-backend-api'
        deployed='https://github.com/GabrielWarner/ecommerce-backend-api'></ProjectCard>
    </div>
    <div class="col center-block aligncard1">
        <ProjectCard
        className='center' 
        img='/images/employeetracker.jpg' 
        name='Employee Tracker' 
        description='An API to manage a company and its employees.'
        repo='https://github.com/GabrielWarner/employee-tracker'
        deployed='https://github.com/GabrielWarner/employee-tracker'></ProjectCard>
    </div>
</div>
      
</div>

    </div>
  )
}

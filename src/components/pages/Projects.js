import React from 'react'
import '../../styles/Projects.css';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <div className='project-container' >
<div className='container'>
      <h1 className='animate__animated animate__bounce' style={{textAlign:"center", color:"white", }}>My Projects</h1>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card1">
        <ProjectCard
        className='center'
        img='/images/vivachat.jpg' 
        name='Viva Chat' 
        description='A peer to peer video chat app using Socket IO and PeerJS'
        repo='https://github.com/brownj47/random-video-chat'
        deployed='https://vivachat.herokuapp.com/'></ProjectCard>
    </div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card2">
    <ProjectCard
        className='center' 
        img='/images/breedfinder.jpg' 
        name='Cute or Not' 
        description='A Dog or Cat breed finder with a mini game "Cute or Not" where you decide which puppy is cutest!'
        repo='https://github.com/GabrielWarner/cute-and-cuddly'
        deployed='https://gabrielwarner.github.io/cute-and-cuddly/'></ProjectCard>
    </div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card3">
    <ProjectCard
        className='center' 
        img='/images/weather.jpg' 
        name='Weather Dashboard' 
        description='A weather app that lets users check the weather in any location'
        repo='https://github.com/GabrielWarner/module-challenge-6'
        deployed='https://gabrielwarner.github.io/module-challenge-6/'></ProjectCard>
    </div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card4">
        <ProjectCard
        className='center' 
        img='/images/socialnetwork.jpg' 
        name='Social Network API' 
        description='An API created to mock a social media website with Users,thoughts, and reactions. Created with Mongo DB.'
        repo='https://github.com/GabrielWarner/social-network-api'
        demo='https://drive.google.com/file/d/1tQVY3zqgmJL2pb9m3EROx2qsooWJNpeh/view'
        ></ProjectCard>
    </div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card5">
    <ProjectCard
        className='center' 
        img='/images/eccomerce.jpg' 
        name='Eccomerce Backend API' 
        description='An API to keep track of inventory for a merchandise store.'
        repo='https://github.com/GabrielWarner/ecommerce-backend-api'
        demo='https://drive.google.com/file/d/14ThZQkGF5Da-hoMgl946D3ziagbsYyCu/view'
        ></ProjectCard>
    </div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-4 center-block aligncard1 card6">
        <ProjectCard
        className='center' 
        img='/images/employeetracker.jpg' 
        name='Employee Tracker' 
        description='An API to manage a company and its employees.'
        repo='https://github.com/GabrielWarner/employee-tracker'
        demo='https://drive.google.com/file/d/1esGPSqDSxSufjQPQlZZViPCHYK-Nu6zB/view'
        ></ProjectCard>
    </div>
</div>
      
</div>

    </div>
  )
}

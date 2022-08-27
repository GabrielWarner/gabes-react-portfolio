import React from 'react'
import '../../styles/Projects.css';
import ProjectCard from '../ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Projects() {
  return (
    <div>
      <Container>
        <h1>My Projects</h1>
      <Row>
        <Col>
        <ProjectCard 
        img='/images/vivachat.jpg' 
        name='Viva Chat' 
        description='A peer to peer video chat app using Socket IO and PeerJS'
        repo='https://github.com/brownj47/random-video-chat'
        deployed='https://vivachat.herokuapp.com/'></ProjectCard>
        </Col>
        <Col>
        <ProjectCard></ProjectCard>
        </Col>
      </Row>

      <Row>
        <Col>
        <ProjectCard></ProjectCard>
        </Col>
        <Col>
        <ProjectCard></ProjectCard>
        </Col>
      </Row>

      <Row>
        <Col><ProjectCard></ProjectCard></Col>
        <Col><ProjectCard></ProjectCard></Col>
      </Row>

      </Container>
    </div>
  )
}

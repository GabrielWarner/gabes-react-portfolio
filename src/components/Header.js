import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({ currentPage, handlePageChange }) {
  return (
    <div>
    <Navbar className='my-3' expand="lg">
      <Container>
        <span className='name' href="#about">Gabriel Warner</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto links">
          <a href='#about' className={currentPage === 'About' ? 'header-link active-link ' : 'header-link '} onClick={() => handlePageChange('About')}>About</a>
          <a href="#projects" className={currentPage === 'Projects' ? 'header-link active-link ' : 'header-link '} onClick={() => handlePageChange('Projects')} >Projects</a>
          <a href="#contact" className={currentPage === 'Contact' ? 'header-link active-link ' : 'header-link '} onClick={() => handlePageChange('Contact')} >Contact</a>
          <a href="#resume" className={currentPage === 'Resume' ? 'header-link active-link ' : 'header-link ' } onClick={() => handlePageChange('Resume')} >Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='header' href="#about">Gabriel Warner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto links">
          <Nav.Link href='#about' className={currentPage === 'About' ? 'nav-link active p-5' : 'nav-link p-5'} onClick={() => handlePageChange('About')}>About</Nav.Link>
          <Nav.Link href="#projects" className={currentPage === 'Projects' ? 'nav-link active p-5' : 'nav-link p-5'} onClick={() => handlePageChange('Projects')} >Projects</Nav.Link>
          <Nav.Link href="#contact" className={currentPage === 'Contact' ? 'nav-link active p-5' : 'nav-link p-5'} onClick={() => handlePageChange('Contact')} >Contact</Nav.Link>
          <Nav.Link href="#resume" className={currentPage === 'Resume' ? 'nav-link active p-5' : 'nav-link p-5' } onClick={() => handlePageChange('Resume')} >Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
import React from 'react';
import '../styles/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>

    
    <Navbar className='justify-content-center p-2' bg="dark" variant="dark">
        
          <Navbar.Brand>
            Gabriel Warner
          </Navbar.Brand>


          <Nav>
          <Nav.Link onClick={() => handlePageChange('About')}  className={currentPage === 'About' ? 'nav-link active p-5' : 'nav-link p-5'}>About</Nav.Link>
          <Nav.Link className={currentPage === 'Projects' ? 'nav-link active p-5' : 'nav-link p-5'} onClick={() => handlePageChange('Projects')} eventKey="#projects">Projects</Nav.Link>
          <Nav.Link className={currentPage === 'Contact' ? 'nav-link active p-5' : 'nav-link p-5'} onClick={() => handlePageChange('Contact')} eventKey="#contact">Contact</Nav.Link>
          <Nav.Link className={currentPage === 'Resume' ? 'nav-link active p-5' : 'nav-link p-5' } onClick={() => handlePageChange('Resume')} eventKey="#resume">Resume</Nav.Link>

          </Nav>


      </Navbar>


    </div>
  );
}

export default Header;
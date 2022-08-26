import React from 'react';
import '../styles/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>

    
    <Navbar className='justify-content-center p-2'  activeKey="#about" bg="dark" variant="dark">
        
          <Navbar.Brand href="#about">
            Gabriel Warner
          </Navbar.Brand>


          <Nav>
          <Nav.Link href="#about" onClick={() => handlePageChange('About')}  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}><a href='#about'></a>About</Nav.Link>
          <Nav.Link className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Projects')} eventKey="#projects"><a href='#Projects'></a>Projects</Nav.Link>
          <Nav.Link className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')} eventKey="#contact"><a href='#Contact'></a>Contact</Nav.Link>
          <Nav.Link className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('Resume')} eventKey="#resume"><a href='#Resume'></a>Resume</Nav.Link>

          </Nav>


      </Navbar>


    </div>
  );
}

export default Header;
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../index.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main">
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />

    </Container>
      
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer/>
    </div>
  );
}

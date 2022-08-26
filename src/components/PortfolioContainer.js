import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../index.css';
import '../styles/PortfolioContainer.css';

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
      <h1>hi</h1>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />

  
      
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer/>
    </div>
  );
}

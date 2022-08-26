import logo from './logo.svg';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import React, { Component }  from 'react';
import { CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CssBaseline>
      <PortfolioContainer/>
      </CssBaseline>
    </div>
  );
}

export default App;

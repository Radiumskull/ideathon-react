import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/styles.scss';

import Home from './pages/Home';


function App() {
  return (
  <BrowserRouter>
    <Home />
  </BrowserRouter>);
}

export default App;

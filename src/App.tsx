import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import InvalidPage from './pages/Invalid';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Homepage />
          }
        />
        <Route
          path='/invalid'
          element={
            <InvalidPage/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

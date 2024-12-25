import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateStoryPage from './pages/CreateStoryPage';
import LoginPage from './pages/LoginPage';
import Grid from './components/Grid';
import Modal from './components/Modal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateStoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Grid />
    </Router>
  );
}

export default App;

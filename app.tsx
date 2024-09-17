import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NormalUserDashboard from './pages/normalUserDashboard'; // Correct path to pages directory
import './styles/globals.css'; // Correct path to global styles

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NormalUserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

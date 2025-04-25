import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Step1Upload from './components/NewTranslation/Step1Upload';
import Step2Details from './components/NewTranslation/Step2Details';
import Step3Preview from './components/NewTranslation/Step3Preview';
import Step4Summary from './components/NewTranslation/Step4Summary';
import ActiveOrders from './components/ActiveOrders';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/new-translation/upload" element={isLoggedIn ? <Step1Upload /> : <Navigate to="/login" />} />
          <Route path="/new-translation/details" element={isLoggedIn ? <Step2Details /> : <Navigate to="/login" />} />
          <Route path="/new-translation/preview" element={isLoggedIn ? <Step3Preview /> : <Navigate to="/login" />} />
          <Route path="/new-translation/summary" element={isLoggedIn ? <Step4Summary /> : <Navigate to="/login" />} />
          <Route path="/active-orders" element={isLoggedIn ? <ActiveOrders /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <nav className="nav">
              <div className="nav-logo">
                <NavLink to="/">Warren Scipio</NavLink>
              </div>
              <ul className="nav-links">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="container page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <ul className="social-links">
              <li><a href="https://github.com/warrenscipio" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/warrenscipio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:warrenscipio@gmail.com">Email</a></li>
            </ul>
            <p>© {new Date().getFullYear()} Warren Scipio. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
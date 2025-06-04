import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="profile">
      <img src="https://via.placeholder.com/120" alt="Profile" className="profile-img" />
      <h1 className="profile-name">Your Name</h1>
      <p className="profile-title">Mobile Developer</p>
    </div>
    <nav className="side-nav">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="side-social">
      <a href="#"><i className="fab fa-github"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fas fa-envelope"></i></a>
    </div>
  </aside>
);

export default Sidebar;

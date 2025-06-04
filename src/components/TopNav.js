import React from 'react';
import './TopNav.css';

const TopNav = () => (
  <nav className="topnav">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#resume" className="active">Resume</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default TopNav;

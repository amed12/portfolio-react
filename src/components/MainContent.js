import React from 'react';
import './MainContent.css';

const MainContent = () => (
  <main className="content">
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>Passionate mobile developer with experience in cross-platform and native app development. I build performant, user-focused mobile solutions for both Android and iOS.</p>
    </section>
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="exp-item">
        <h3>Mobile Developer at XYZ Corp</h3>
        <span className="exp-duration">2022 - Present</span>
        <p>Developed and maintained several high-traffic mobile apps using Flutter and React Native.</p>
      </div>
      <div className="exp-item">
        <h3>Junior App Developer at ABC Studio</h3>
        <span className="exp-duration">2020 - 2022</span>
        <p>Worked on native Android and iOS apps, focusing on UI/UX and performance optimization.</p>
      </div>
    </section>
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Awesome App</h3>
          <p>Cross-platform productivity app built with Flutter. Integrated push notifications, offline sync, and beautiful animations.</p>
          <a href="#" className="project-link">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Health Tracker</h3>
          <p>Native iOS and Android app for tracking health metrics. Used Swift and Kotlin, with Firebase backend.</p>
          <a href="#" className="project-link">View on GitHub</a>
        </div>
      </div>
    </section>
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
    </section>
  </main>
);

export default MainContent;

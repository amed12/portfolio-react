import logo from './logo.svg';
import './App.css';

import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TopNav from './components/TopNav';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app-bg">
      <TopNav />
      <div className="main-layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}


export default App;

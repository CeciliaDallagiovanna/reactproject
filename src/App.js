import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage'; //ponerlo en routes mas tarde
import HomePage from './pages/HomePage';
import MarathonDetailPage from './pages/MarathonDetailPage';
import { Routes, Route } from 'react-router-dom';

//figure how to make the font work

function App() {
  return (
    <div  className="App app-body">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='home/:marathonId' element={<MarathonDetailPage />} />
      </Routes>
      
      

      <Footer />
    </div>
  );
};

export default App;

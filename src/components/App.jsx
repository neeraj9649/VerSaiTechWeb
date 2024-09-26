import React from 'react';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Herosection/Navbar';
import './App.css'; // Import for the keyframes

function App() {
  return (
    <div
      className="h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #d2001a, #7462ff, #f48e21, #23d5ab)',
        backgroundSize: '300% 300%',
        animation: 'color 12s ease-in-out infinite',
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;

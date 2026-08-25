import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import WaveguideBackground from './components/WaveGuideBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import WhatWeExplore from './sections/WhatWeExplore';
import Events from './sections/Events';
import Research from './sections/Research';
import MeetTheTeam from './sections/MeetTheTeam';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WholeCrew from './pages/WholeCrew';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#crew' ? 'crew' : 'main';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#crew') {
        setCurrentView('crew');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('main');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openCrewView = () => {
    window.location.hash = 'crew';
    setCurrentView('crew');
    window.scrollTo(0, 0);
  };

  const openMainView = () => {
    window.location.hash = 'team';
    setCurrentView('main');
    setTimeout(() => {
      const teamSec = document.getElementById('team');
      if (teamSec) {
        teamSec.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="app-container">
      {/* Immersive background canvas utilities */}
      <WaveguideBackground />
      <CursorGlow />

      {/* Floating navigation */}
      <Navbar />

      {/* Main layout or Whole Crew Page */}
      {currentView === 'crew' ? (
        <WholeCrew onBack={openMainView} />
      ) : (
        <main>
          <Hero />
          <About />
          <WhatWeExplore />
          <Events />
          <Research />
          <MeetTheTeam onOpenCrew={openCrewView} />
          <Contact />
        </main>
      )}

      {/* Roster footer */}
      <Footer />
    </div>
  );
}
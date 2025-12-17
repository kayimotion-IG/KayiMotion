import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import AIStudio from './components/AIStudio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import StartProjectModal from './components/StartProjectModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type View = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white flex flex-col">
      <CustomCursor />
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Marquee />
            <Philosophy />
            <Services />
            <AIStudio />
            <Portfolio onOpenProject={openProjectModal} />
            <Contact />
          </>
        )}
        
        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => setCurrentView('home')} />
        )}
        
        {currentView === 'terms' && (
          <TermsOfService onBack={() => setCurrentView('home')} />
        )}
      </main>

      <Footer 
        onOpenProject={openProjectModal} 
        onNavigate={handleNavigate}
      />
      
      <StartProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />
    </div>
  );
};

export default App;
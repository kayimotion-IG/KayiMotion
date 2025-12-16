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

const App: React.FC = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <AIStudio />
        <Portfolio onOpenProject={openProjectModal} />
        <Contact />
      </main>
      <Footer onOpenProject={openProjectModal} />
      
      <StartProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />
    </div>
  );
};

export default App;
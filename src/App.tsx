import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import NextSection from './components/NextSection';
import MenuOverlay from './components/MenuOverlay';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="noise-bg" />
      <div className="vignette" />
      
      {/* SVG Filters for distortion effects */}
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <Cursor />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative w-full min-h-screen flex flex-col font-sans"
      >
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <Hero />
        <NextSection />
      </motion.div>
    </>
  );
}

export default App;

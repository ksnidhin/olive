import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const links = ['Collection', 'Journal'];

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // reset state when closed
      setTimeout(() => setShowComingSoon(false), 500);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    if (link === 'Collection') {
      e.preventDefault();
      setShowComingSoon(true);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    setShowComingSoon(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-full bg-brand-dark z-[100] flex flex-col justify-center items-center text-brand-bg pointer-events-auto"
        >
          {/* Close / Back Button */}
          <button 
            onClick={showComingSoon ? handleBack : onClose}
            className="absolute top-8 right-6 md:right-12 md:top-10 flex items-center gap-4 group hover:opacity-70 transition-opacity z-10"
          >
            <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">
              {showComingSoon ? 'Back' : 'Close'}
            </span>
            <div className="w-8 flex flex-col gap-1.5 relative h-4 justify-center">
              <span className={`absolute w-full h-[1px] bg-brand-bg origin-center transition-transform duration-300 ${showComingSoon ? 'rotate-0 group-hover:scale-x-75' : 'rotate-45 group-hover:scale-x-75'}`}></span>
              <span className={`absolute w-full h-[1px] bg-brand-bg origin-center transition-transform duration-300 ${showComingSoon ? 'rotate-0 scale-x-50 translate-y-2 group-hover:scale-x-75' : '-rotate-45 group-hover:scale-x-75'}`}></span>
            </div>
          </button>

          <AnimatePresence mode="wait">
            {!showComingSoon ? (
              <motion.nav 
                key="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8 md:gap-12 w-full px-4"
              >
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter hover:text-brand-concrete transition-colors relative group overflow-hidden"
                  >
                    <span className="relative z-10">{link}</span>
                    <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[2px] bg-brand-bg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
                  </motion.a>
                ))}
              </motion.nav>
            ) : (
              <motion.div
                key="coming-soon"
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center px-6"
              >
                <span className="text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase text-brand-bg/60 mb-8">
                  Coming Soon
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
                  Collection
                </h2>
                <p className="text-xs md:text-sm tracking-widest uppercase text-brand-bg/80 leading-relaxed max-w-sm mx-auto">
                  Something new is taking shape.<br/>
                  Sign up to be notified.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

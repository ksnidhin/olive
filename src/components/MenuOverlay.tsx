import { motion, AnimatePresence } from 'framer-motion';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const links = ['Collection', 'Journal', 'About', 'Contact'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-full bg-brand-dark z-50 flex flex-col justify-center items-center text-brand-bg pointer-events-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-6 md:right-12 md:top-10 flex items-center gap-4 group hover:opacity-70 transition-opacity"
          >
            <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">Close</span>
            <div className="w-8 flex flex-col gap-1.5 relative h-4 justify-center">
              <span className="absolute w-full h-[1px] bg-brand-bg origin-center rotate-45 transition-transform group-hover:scale-x-75"></span>
              <span className="absolute w-full h-[1px] bg-brand-bg origin-center -rotate-45 transition-transform group-hover:scale-x-75"></span>
            </div>
          </button>

          <nav className="flex flex-col items-center gap-8 md:gap-12">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={onClose}
                className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter hover:text-brand-concrete transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">{link}</span>
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-brand-bg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
              </motion.a>
            ))}
          </nav>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 flex gap-8 text-[10px] tracking-widest uppercase opacity-50"
          >
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

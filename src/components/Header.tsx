import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-8 md:px-12 md:py-10 flex justify-between items-start pointer-events-none"
    >
      <div className="pointer-events-auto">
        <svg width="100" height="40" viewBox="0 0 100 40" className="fill-brand-dark overflow-visible">
           <path d="M5,10 C5,10 10,-5 20,5 C30,15 25,25 25,25 C25,25 20,40 10,35 C0,30 5,10 5,10 Z" style={{filter: 'url(#gooey)'}}/>
           <path d="M30,5 C40,-5 45,15 45,15 C45,15 50,30 40,35 C30,40 25,15 30,5 Z" style={{filter: 'url(#gooey)'}}/>
           <text x="0" y="25" fontFamily="Syncopate, sans-serif" fontWeight="bold" fontSize="22" letterSpacing="-1.5" className="fill-brand-dark">UNIVE</text>
        </svg>
      </div>
      
      <div className="flex items-center gap-8 lg:gap-16 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-brand-dark">Coming Soon</span>
          <div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div>
        </div>
        
        <button 
          onClick={onMenuClick}
          className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
        >
          <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-brand-dark">Menu</span>
          <div className="w-8 flex flex-col gap-1.5">
            <span className="w-full h-[1px] bg-brand-dark origin-right transition-transform group-hover:scale-x-75"></span>
            <span className="w-full h-[1px] bg-brand-dark origin-right transition-transform group-hover:scale-x-50"></span>
          </div>
        </button>
      </div>
    </motion.header>
  );
}

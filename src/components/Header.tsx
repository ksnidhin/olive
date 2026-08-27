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
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-10 flex justify-between items-start pointer-events-none"
    >
      {/* Background gradient to ensure readability against dark concrete */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-bg/80 to-transparent -z-10 pointer-events-none"></div>

      <div className="pointer-events-auto flex items-center mt-1">
        <img 
          src="/unive-logo.png" 
          alt="UNIVE" 
          className="h-3 md:h-4 lg:h-5 object-contain mix-blend-multiply"
        />
      </div>
      
      <div className="flex items-center gap-6 md:gap-12 lg:gap-16 pointer-events-auto">
        <div className="flex items-center gap-2 group cursor-default">
          <span className="text-[9px] md:text-[10px] lg:text-xs font-bold tracking-widest uppercase text-brand-dark group-hover:opacity-80 transition-opacity drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Coming Soon
          </span>
          <div className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-brand-green opacity-50 animate-ping"></span>
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-brand-green drop-shadow-sm"></span>
          </div>
        </div>
        
        <button 
          onClick={onMenuClick}
          className="flex items-center gap-3 md:gap-4 group hover:opacity-70 transition-opacity"
        >
          <span className="text-[9px] md:text-[10px] lg:text-xs font-bold tracking-widest uppercase text-brand-dark drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Menu
          </span>
          <div className="w-6 md:w-8 flex flex-col gap-1.5">
            <span className="w-full h-[1px] bg-brand-dark origin-right transition-transform group-hover:scale-x-75"></span>
            <span className="w-full h-[1px] bg-brand-dark origin-right transition-transform group-hover:scale-x-50"></span>
          </div>
        </button>
      </div>
    </motion.header>
  );
}

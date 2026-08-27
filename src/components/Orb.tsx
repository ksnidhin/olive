import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Orb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center my-12 z-20 pointer-events-none w-16 h-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center h-full w-full"
      >
        {/* Top Dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-brand-dark absolute top-0"></div>
        
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-brand-dark/20 z-0"></div>

        {/* Small Orb */}
        <motion.div 
          animate={{ x: mousePos.x * 10, y: mousePos.y * 10 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative z-10 flex justify-center items-center"
        >
          {/* Subtle Glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-12 h-12 bg-black rounded-full blur-xl mix-blend-multiply"
          ></motion.div>
          
          {/* Main small circle */}
          <div className="relative w-5 h-5 bg-black rounded-full shadow-md"></div>
        </motion.div>

        {/* Bottom Dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-brand-dark absolute bottom-0"></div>
      </motion.div>
    </div>
  );
}

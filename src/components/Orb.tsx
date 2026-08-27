import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Orb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position for parallax (-1 to 1)
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center my-12 z-20 h-40 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Top Dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-brand-dark mb-8"></div>
        
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-brand-dark/30 z-0"></div>

        {/* The Orb */}
        <motion.div 
          animate={{ 
            x: mousePos.x * 15,
            y: mousePos.y * 15,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative z-10 flex justify-center items-center"
        >
          {/* Multiple blurred layers for that deep glow effect */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 bg-brand-dark rounded-full blur-xl mix-blend-multiply"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-16 h-16 bg-black rounded-full blur-md"
          ></motion.div>
          <div className="relative w-12 h-12 bg-black rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)]"></div>
        </motion.div>

        {/* Bottom Dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-brand-dark mt-8"></div>
      </motion.div>
    </div>
  );
}

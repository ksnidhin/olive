import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';
import Orb from './Orb';
import FooterLinks from './FooterLinks';

export default function Hero() {
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
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center overflow-hidden pt-32 pb-8 pointer-events-none">
      
      {/* Background Textures & Vertical Split */}
      {/* Right side concrete wall with T-shirt clipping */}
      <div className="absolute top-0 right-0 w-[40%] md:w-[35%] lg:w-[28%] h-full z-0 overflow-hidden shadow-[-30px_0_50px_rgba(0,0,0,0.08)] pointer-events-none bg-[#cbc9c3] mix-blend-multiply border-l border-black/5">
        <motion.div 
          animate={{ x: mousePos.x * -10, y: mousePos.y * -10 }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
          className="absolute top-[10%] md:top-[15%] right-0 w-[200%] sm:w-[180%] md:w-[150%] lg:w-[130%]"
        >
          <img 
            src="/tshirt-wall-generated.jpg" 
            alt="Wall and Garment" 
            className="w-full h-auto object-cover object-right" 
            style={{ filter: 'brightness(0.95)' }} 
          />
        </motion.div>
      </div>

      {/* Rock on bottom left */}
      <motion.div 
        animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute -bottom-16 md:-bottom-24 left-[15%] md:left-[20%] w-[60%] sm:w-[50%] md:w-[35%] lg:w-[25%] max-w-sm z-10 mix-blend-multiply pointer-events-none"
      >
        <div className="w-full aspect-square rounded-full overflow-hidden">
          <img src="/rock.jpg" alt="Rock" className="w-full h-full object-cover" style={{ filter: 'contrast(1.3) brightness(0.9)' }} />
        </div>
      </motion.div>

      {/* Large thin decorative circle arc behind rock */}
      <div className="absolute -bottom-[5%] left-[25%] w-[60vw] md:w-[45vw] h-[60vw] md:h-[45vw] rounded-full border-[1px] border-brand-dark/10 pointer-events-none z-0"></div>

      {/* Left vertical text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-6 md:left-10 top-[35%] -rotate-90 origin-left z-20 pointer-events-auto flex items-center gap-4"
      >
        <span className="text-[9px] md:text-[10px] font-medium tracking-[0.4em] uppercase text-brand-dark whitespace-nowrap">
          Beyond Universe.
        </span>
      </motion.div>

      {/* Main Content Vertical Stack */}
      <div className="relative z-20 w-full max-w-5xl px-4 flex flex-col items-center flex-grow pointer-events-auto mt-4 md:mt-8">
        
        {/* Top small heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark text-center leading-[2em] mb-12 md:mb-16"
        >
          Something new<br />
          is taking shape.
        </motion.h2>

        {/* Giant Logo */}
        <BrandLogo />

        {/* Subtitle directly below logo */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-xl font-bold tracking-tight text-brand-green mt-6 md:mt-10 font-display"
        >
          Beyond universe.
        </motion.h1>

        {/* Orb directly below subtitle */}
        <Orb />

        {/* Generous negative space below the orb */}
        <div className="flex-grow min-h-[150px] md:min-h-[250px]"></div>
      </div>

      <FooterLinks />

      {/* Bottom left copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 md:bottom-8 left-6 md:left-12 z-40 pointer-events-auto"
      >
        <p className="text-[8px] md:text-[9px] tracking-widest uppercase text-brand-dark/60 font-medium leading-[1.8em]">
          © 2026 UNIVE<br/>
          ALL RIGHTS RESERVED.
        </p>
      </motion.div>

      {/* Crosshairs */}
      <div className="absolute left-[20%] bottom-[35%] w-6 h-6 pointer-events-none z-40 opacity-30 mix-blend-difference">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
         <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white"></div>
         <div className="absolute top-1/2 left-1/2 w-3 h-3 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
}

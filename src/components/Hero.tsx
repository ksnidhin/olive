import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';
import Orb from './Orb';
import NewsletterForm from './NewsletterForm';
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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden pointer-events-none">
      
      {/* Background Textures */}
      {/* Concrete wall + Hanging T-shirt */}
      <div className="absolute top-0 right-0 w-[50%] md:w-[40%] lg:w-[32%] h-full z-0 overflow-hidden shadow-[-30px_0_50px_rgba(0,0,0,0.08)] pointer-events-none">
        <motion.div 
          animate={{ 
            x: mousePos.x * -10, 
            y: mousePos.y * -10 
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
          className="absolute top-0 left-[-5%] w-[110%] h-[110%] -mt-[2%]"
        >
          <img 
            src="/tshirt-wall-generated.jpg" 
            alt="Wall and Garment" 
            className="w-full h-full object-cover object-[75%_center] md:object-[80%_center] lg:object-[85%_center]" 
            style={{ filter: 'brightness(0.95)' }} 
          />
        </motion.div>
      </div>

      {/* Rock on bottom left */}
      <motion.div 
        animate={{ 
          x: mousePos.x * 20, 
          y: mousePos.y * 20 
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute -bottom-10 -left-10 md:-left-20 w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] max-w-lg z-10 mix-blend-multiply opacity-90 md:opacity-100"
      >
        <img src="/rock.jpg" alt="Rock" className="w-full h-auto object-cover rounded-t-full rounded-r-full" style={{ filter: 'contrast(1.3) brightness(0.8)' }} />
      </motion.div>

      {/* Left vertical text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-6 md:left-12 top-1/3 -rotate-90 origin-left z-20 pointer-events-auto flex items-center gap-4"
      >
        <span className="text-[7px] md:text-[8px] font-medium tracking-[0.2em] text-brand-dark/50">
          01.04.26
        </span>
        <span className="text-[9px] md:text-[10px] font-medium tracking-[0.4em] uppercase text-brand-dark whitespace-nowrap">
          Beyond Universe.
        </span>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 mt-8 md:mt-12 pointer-events-auto min-h-[70vh]">
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase text-brand-dark text-center leading-relaxed mb-8 md:mb-10"
        >
          Something new<br />
          is taking shape.
        </motion.h2>

        <BrandLogo />

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-xl font-bold tracking-tight text-brand-green mt-4 md:mt-6 font-display"
        >
          Beyond universe.
        </motion.h1>

        <Orb />

        <NewsletterForm />
      </div>

      <FooterLinks />

      {/* Large thin decorative circle arc */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full border-[1px] border-brand-dark/10 pointer-events-none z-10"></div>

      {/* Bottom left copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-6 md:left-24 z-40 pointer-events-auto"
      >
        <p className="text-[8px] md:text-[9px] tracking-widest uppercase text-brand-dark/60 leading-relaxed mix-blend-difference text-white">
          © 2026 UNIVE<br/>
          ALL RIGHTS RESERVED.
        </p>
      </motion.div>

      {/* Decorative lines / crosshairs from reference */}
      <div className="absolute left-[15%] bottom-[20%] w-8 h-8 pointer-events-none z-40 opacity-30 mix-blend-difference">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
         <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white"></div>
         <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
}

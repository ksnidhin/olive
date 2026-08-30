import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FooterLinks from './FooterLinks';

export default function NextSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax based on scroll
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xComingSoon = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] min-h-screen overflow-hidden flex flex-col justify-center items-center py-32 px-6 md:px-12 lg:px-24 border-t border-brand-dark/20 text-brand-bg cursor-default"
    >
      {/* Background Texture & Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none"></div>

      {/* Giant Background Wordmark */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[120vw] opacity-5 pointer-events-none mix-blend-screen flex justify-center"
      >
        <img src="/unive-logo.png" alt="" className="w-full h-auto object-contain filter invert" />
      </motion.div>

      {/* New Coming Soon Scrolling SVG */}
      <motion.div 
        style={{ y: yText, x: xComingSoon }}
        className="absolute top-[20%] md:top-[10%] w-[150vw] md:w-[100vw] lg:w-[80vw] opacity-10 pointer-events-none flex justify-center mix-blend-screen"
      >
        <img src="/coming-soon.svg" alt="Coming Soon" className="w-full h-auto object-contain" />
      </motion.div>


      {/* Content Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
        
        {/* Typography */}
        <motion.div 
          style={{ y: yText }}
          className="flex flex-col items-center text-center w-full max-w-2xl"
        >
          {/* Main "COMING SOON" Content Block */}
          <motion.div
            initial={{ opacity: 0.15, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12 md:gap-24 origin-center"
          >
            {/* Metadata */}
            <div className="flex flex-col items-center gap-3 text-[8px] md:text-[9px] font-medium tracking-[0.4em] uppercase text-brand-bg/40">
              <span>UNIVE / 001</span>
              <span>2026 COLLECTION</span>
              <span className="text-brand-bg/80 mt-2">COMING SOON</span>
              <div className="w-12 h-[1px] bg-brand-bg/20 mt-4"></div>
            </div>

            {/* Main Heading */}
            <p className="text-xs md:text-sm font-medium tracking-[0.35em] uppercase leading-[2em] text-brand-bg/90">
              A NEW<br/>
              IN EVERYDAY WEAR.
            </p>
          </motion.div>
        </motion.div>

      </div>
      
      <FooterLinks />
    </section>
  );
}

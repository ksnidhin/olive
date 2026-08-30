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

      {/* Main COMING SOON SVG Focal Point */}
      <div className="relative z-20 w-full max-w-4xl md:max-w-6xl mx-auto flex flex-col items-center justify-center px-4 md:px-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 0.95, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center origin-center drop-shadow-2xl"
        >
          <img 
            src="/coming-soon.svg" 
            alt="Coming Soon" 
            className="w-full h-auto object-contain" 
          />
        </motion.div>
      </div>
      
      <FooterLinks />
    </section>
  );
}

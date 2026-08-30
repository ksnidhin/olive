import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function NextSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax based on scroll
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y01 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const xComingSoon = useTransform(scrollYProgress, [0, 1], [200, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only calculate if the section is in view? It's fine globally for subtle effect
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

      {/* Giant 01 */}
      <motion.div 
        style={{ y: y01, WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[10%] -left-[10%] md:-left-[5%] text-[40vw] md:text-[30vw] font-display font-bold leading-none pointer-events-none select-none text-transparent"
      >
        01
      </motion.div>

      {/* Subtle Graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-brand-bg/10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full border border-brand-bg/20 pointer-events-none"></div>
      
      {/* Content Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16 lg:gap-8">
        
        {/* Left Column: Typography */}
        <motion.div 
          style={{ y: yText }}
          className="flex flex-col gap-12 md:gap-24 order-2 lg:order-1 w-full lg:w-1/3"
        >
          {/* Main "COMING SOON" Content Block */}
          <motion.div
            initial={{ opacity: 0.15, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Premium custom ease
            className="flex flex-col gap-12 md:gap-24 origin-left md:origin-center lg:origin-left"
          >
            {/* Metadata */}
            <div className="flex flex-col gap-3 text-[8px] md:text-[9px] font-medium tracking-[0.4em] uppercase text-brand-bg/40">
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
        
        {/* Right Column: Fabric Image */}
        <motion.div 
          style={{ y: yImage }}
          className="order-1 lg:order-2 w-full lg:w-2/3 max-w-3xl relative flex justify-end"
        >
          <motion.div 
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden bg-black group"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <motion.img 
              animate={{ 
                x: mousePos.x * -10, 
                y: mousePos.y * -10,
                scale: isHoveringImage ? 1.05 : 1
              }}
              transition={{ type: "spring", stiffness: 40, damping: 25 }}
              src="/fabric.jpg" 
              alt="Collection Preview" 
              className="absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
            />
            
            {/* View Label on Hover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHoveringImage ? 1 : 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center gap-2 mix-blend-difference"
            >
              <div className="w-8 h-8 relative flex justify-center items-center">
                <span className="absolute w-full h-[1px] bg-white"></span>
                <span className="absolute w-[1px] h-full bg-white"></span>
              </div>
              <span className="text-[9px] tracking-widest uppercase text-white font-medium">001</span>
            </motion.div>
          </motion.div>
          
          {/* Decorative bracket */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute -left-6 top-1/4 bottom-1/4 w-[1px] bg-brand-bg/10 hidden md:block"
          >
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-brand-bg/30"></div>
            <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-brand-bg/30"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

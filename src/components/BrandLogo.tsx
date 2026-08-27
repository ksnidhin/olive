import { motion } from 'framer-motion';

export default function BrandLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[800px] mx-auto z-10 flex justify-center items-center px-4"
    >
      <img 
        src="/unive-logo.png" 
        alt="UNIVE" 
        className="w-full h-auto object-contain mix-blend-multiply"
      />
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function FooterLinks() {
  const links = ['Instagram', 'About', 'Contact'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-6 md:bottom-8 right-6 md:right-12 flex flex-col md:flex-row items-end gap-3 md:gap-8 z-30 pointer-events-auto"
    >
      {links.map((link) => (
        <a 
          key={link} 
          href={`#${link.toLowerCase()}`}
          className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-brand-dark/80 hover:text-brand-dark transition-colors relative group"
        >
          {link}
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </a>
      ))}
    </motion.div>
  );
}

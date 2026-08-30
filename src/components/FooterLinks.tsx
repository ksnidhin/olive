import { motion } from 'framer-motion';

export default function FooterLinks() {
  const links = [
    { name: 'About', url: '#about', target: '_self' },
    { name: 'Instagram', url: 'https://www.instagram.com/unive.in', target: '_blank' },
    { name: 'Contact', url: 'mailto:wearunive@gmail.com', target: '_self' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute bottom-6 md:bottom-8 left-0 w-full flex flex-col items-center gap-3 md:gap-4 z-30 pointer-events-auto px-4"
    >
      <div className="flex flex-row items-center justify-center gap-5 sm:gap-8 md:gap-12 w-full">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            target={link.target}
            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-[8px] sm:text-[9px] md:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-brand-bg/80 hover:text-brand-bg transition-colors relative group whitespace-nowrap"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-bg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>
        ))}
      </div>
      
      <a 
        href="mailto:wearunive@gmail.com"
        className="text-[8px] md:text-[9px] font-medium tracking-[0.15em] md:tracking-[0.2em] text-brand-bg/50 hover:text-brand-bg/80 transition-colors"
      >
        wearunive@gmail.com
      </a>
    </motion.div>
  );
}

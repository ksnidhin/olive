import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      className="flex flex-col items-center mt-12 mb-32 z-30 relative w-full max-w-md mx-auto"
    >
      <h3 className="text-[9px] md:text-[10px] font-medium tracking-[0.4em] uppercase text-brand-dark mb-6 text-center">
        Be the first to know.
      </h3>

      <form onSubmit={handleSubmit} className="relative flex w-full h-12 md:h-14 border border-brand-dark/30">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER YOUR EMAIL" 
          className="flex-grow bg-transparent text-brand-dark px-6 text-[10px] md:text-[11px] tracking-widest placeholder:text-brand-dark/60 focus:outline-none focus:bg-white/5 transition-colors rounded-none"
          disabled={status === 'loading' || status === 'success'}
        />
        
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="w-16 md:w-20 h-full bg-brand-dark text-brand-bg flex justify-center items-center hover:bg-black transition-colors disabled:opacity-80"
        >
          <AnimatePresence mode="wait">
            {status === 'idle' || status === 'error' ? (
              <motion.div
                key="arrow"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <ArrowRight size={18} strokeWidth={1} />
              </motion.div>
            ) : status === 'loading' ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-4 h-4 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin"
              />
            ) : (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Check size={18} strokeWidth={1} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        
        {/* Error underline effect */}
        {status === 'error' && (
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-red-800 origin-left z-10"
          />
        )}
      </form>
    </motion.div>
  );
}

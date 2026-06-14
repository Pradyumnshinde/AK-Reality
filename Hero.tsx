import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AK Reality <br/>
          <span className="italic font-light">& Architects</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-accent font-light tracking-wide mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Designing Spaces That Inspire
        </motion.p>
        
        <motion.p 
          className="max-w-2xl text-base md:text-lg text-white/80 font-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We specialize in innovative architectural designs, construction planning, and modern living solutions. Elevating environments with precision and creativity.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects" className="px-8 py-4 bg-accent text-white font-medium tracking-wide uppercase text-sm hover:bg-accent/90 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-primary transition-all">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

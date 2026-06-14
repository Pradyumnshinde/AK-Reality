import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Location</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary/80 font-light max-w-2xl mx-auto">
            Visit our studio to explore materials, discuss blueprints, and begin your journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a 
            href="https://goo.gl/maps/NA2jNpVLLg5UacXS8?g_st=aw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium tracking-wide uppercase text-sm hover:bg-accent transition-colors"
          >
            Get Directions on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}

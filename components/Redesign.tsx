import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Redesign: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-4"
            >
              Website Redesign Service
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Turn outdated websites into <span className="text-primary-light">high-converting</span> assets.
            </motion.h2>
            <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Is your current website slow, old-fashioned, or not getting leads? I completely overhaul design and code to match modern standards, improving speed, SEO, and trust.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-transform hover:translate-y-[-2px] shadow-lg shadow-primary/20"
            >
              Redesign My Website <ArrowRight size={20} />
            </a>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Background Card (Old Site Representation) */}
              <motion.div 
                initial={{ rotate: -5, opacity: 0 }}
                whileInView={{ rotate: -6, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-neutral-700 rounded-xl border border-neutral-600 transform translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 flex items-center justify-center"
              >
                <div className="text-neutral-500 font-mono text-sm">Old Design</div>
              </motion.div>

              {/* Foreground Card (New Site Representation) */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-neutral-800 rounded-xl border border-neutral-600 shadow-2xl overflow-hidden aspect-[4/3] group"
              >
                <div className="absolute top-0 left-0 w-full h-8 bg-neutral-900 flex items-center px-4 gap-2 border-b border-neutral-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="pt-8 h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary mb-4 animate-pulse flex items-center justify-center">
                     <span className="font-bold text-lg md:text-2xl">New</span>
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-white mb-2">Modern & Fast</h3>
                   <div className="w-24 md:w-32 h-2 bg-neutral-600 rounded-full mb-2"></div>
                   <div className="w-16 md:w-24 h-2 bg-neutral-700 rounded-full"></div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redesign;
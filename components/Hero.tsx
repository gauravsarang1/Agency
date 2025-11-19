import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-64 md:w-96 h-64 md:h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-primary-light text-xs md:text-sm font-bold tracking-wide mb-6 border border-blue-100 dark:border-blue-800/50">
            👋 Hi, I'm Gaurav Sarang
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-neutral-darkest dark:text-white tracking-tight">
            I Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light block md:inline">High-Converting</span>
            Landing Pages.
          </h1>

          <p className="text-base md:text-xl text-neutral-gray dark:text-neutral-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Helping US small businesses and startups boost leads with fast, clean, and modern websites. Real results through optimized design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-primary-dark rounded-2xl transition-all shadow-lg shadow-primary/40 hover:scale-105 hover:shadow-primary/60 flex items-center justify-center gap-2"
            >
              Get a Landing Page <ArrowRight size={20} />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-neutral-darkest dark:text-white bg-white dark:bg-neutral-surfaceDark hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl transition-all hover:scale-105 flex justify-center"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
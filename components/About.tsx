import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { BENEFITS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-white dark:bg-neutral-bgDark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Image/Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-surfaceDark relative z-10 border border-neutral-200 dark:border-neutral-700">
                {/* Using placeholder image as per prompt instructions */}
               <img 
                src="https://picsum.photos/800/800" 
                alt="Gaurav Sarang Workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            {/* Decoration Box */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-primary/30 rounded-3xl -z-0" />
          </motion.div>

          {/* Content */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="w-full md:w-1/2"
          >
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-6 leading-tight">
              I build websites that help businesses <span className="text-primary">grow.</span>
            </h3>
            <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg mb-6 leading-relaxed">
              I'm Gaurav Sarang, a creative web designer and developer from India. I specialize in creating high-performance landing pages for US small businesses and startups.
            </p>
            <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg mb-8 leading-relaxed">
              My focus isn't just on writing code; it's on crafting digital experiences that convert visitors into customers. Whether you need a brand new site or a redesign of an old one, I ensure your online presence looks premium and loads instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-neutral-darkest dark:text-neutral-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
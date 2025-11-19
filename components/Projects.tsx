import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-32 bg-neutral-bgLight dark:bg-neutral-bgDark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-4">
              Featured Projects
            </h3>
            <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg">
              A selection of high-converting landing pages and websites I've built.
            </p>
          </div>
          <a href="#" className="hidden md:block text-primary font-bold hover:underline underline-offset-4 mt-4 md:mt-0">
            View GitHub Profile →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-surfaceDark shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-sm">
                  <button className="bg-white text-neutral-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Demo <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <span className="text-xs font-bold text-primary-light uppercase tracking-wider">
                  {project.category}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-neutral-darkest dark:text-white mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile GitHub Link */}
        <div className="mt-8 md:hidden text-center">
           <a href="#" className="text-primary font-bold hover:underline underline-offset-4">
            View GitHub Profile →
          </a>
        </div>
        
        {/* Placeholder for Future Landing Pages */}
        <div className="mt-12 p-8 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl text-center">
           <p className="text-neutral-500 dark:text-neutral-400 font-medium">
             More live projects coming soon...
           </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
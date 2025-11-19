import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-neutral-bgLight dark:bg-neutral-bgDark relative overflow-hidden">
       {/* Subtle bg gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-neutral-bgDark/50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-neutral-gray dark:text-neutral-400 text-lg">
            The modern tech stack I use to build fast, scalable, and beautiful websites.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-neutral-surfaceDark p-6 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-100 dark:border-neutral-700 transition-all flex flex-col items-center justify-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
                <skill.icon size={28} />
              </div>
              <span className="font-semibold text-neutral-darkest dark:text-neutral-200">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
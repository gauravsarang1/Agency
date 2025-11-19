import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-white dark:bg-neutral-bgDark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">My Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-4">
            What I Can Do For You
          </h3>
          <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg">
            Comprehensive web solutions tailored for small business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 md:p-8 rounded-3xl bg-neutral-bgLight dark:bg-neutral-surfaceDark border border-neutral-100 dark:border-neutral-700 hover:border-primary/30 dark:hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-bl-full -mr-6 -mt-6 md:-mr-8 md:-mt-8 transition-transform group-hover:scale-150" />
              
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white dark:bg-neutral-bgDark shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={24} className="md:w-7 md:h-7" />
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-neutral-darkest dark:text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-neutral-gray dark:text-neutral-400 text-sm md:text-base mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-bold text-primary cursor-pointer group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
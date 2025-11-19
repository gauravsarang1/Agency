import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-white dark:bg-neutral-bgDark border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-4">
            Trusted by Business Owners
          </h3>
          <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg">
            Here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-50 dark:bg-neutral-surfaceDark p-8 rounded-3xl relative border border-neutral-100 dark:border-neutral-700 hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-8 right-8 text-primary/20 w-10 h-10" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-600 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-neutral-darkest dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
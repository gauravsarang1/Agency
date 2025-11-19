import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 bg-neutral-bgLight dark:bg-neutral-bgDark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">F.A.Q.</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest dark:text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg">
            Common questions about my process and services.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-surfaceDark rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === index ? 'text-primary' : 'text-neutral-darkest dark:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Github, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. Please email me directly.");
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-white dark:bg-neutral-bgDark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Text Info */}
          <div className="lg:w-1/2">
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-neutral-darkest dark:text-white mb-6">
              Let's build something <br /> amazing together.
            </h3>
            <p className="text-neutral-gray dark:text-neutral-400 text-base md:text-lg mb-8 md:mb-10 max-w-md">
              Have a project in mind? Looking for a high-converting landing page? Feel free to reach out. I'm available for freelance projects.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-surfaceDark hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors group">
                <div className="p-3 bg-white dark:bg-neutral-700 rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                  <p className="font-semibold text-neutral-darkest dark:text-white truncate">{CONTACT_INFO.email}</p>
                </div>
              </a>
              
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-surfaceDark hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors group">
                <div className="p-3 bg-white dark:bg-neutral-700 rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Phone</p>
                  <p className="font-semibold text-neutral-darkest dark:text-white">{CONTACT_INFO.phone}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-8 md:mt-10">
              {[
                { icon: Linkedin, href: CONTACT_INFO.linkedin },
                { icon: Instagram, href: CONTACT_INFO.instagram },
                { icon: Github, href: CONTACT_INFO.github },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="bg-neutral-50 dark:bg-neutral-surfaceDark p-6 md:p-10 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-bgDark border border-neutral-200 dark:border-neutral-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-darkest dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-bgDark border border-neutral-200 dark:border-neutral-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-darkest dark:text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-bgDark border border-neutral-200 dark:border-neutral-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-darkest dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex justify-center items-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
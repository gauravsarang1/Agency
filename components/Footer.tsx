import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-bgDark text-center">
      <div className="container mx-auto px-6">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} Gaurav Sarang. All rights reserved.
        </p>
        <p className="text-neutral-400 dark:text-neutral-600 text-xs mt-2">
          Designed with React, TailwindCSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
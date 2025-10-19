import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white dark:bg-dark-card py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code size={24} className="text-primary-600 dark:text-primary-400" />
            <span className="font-bold text-xl">Abotalib Adam</span>
          </div>
          
          <div className="text-center md:text-left text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Abotalib Adam. All rights reserved.
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart size={14} className="text-error-500 dark:text-error-400" />
          <span>and modern web technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
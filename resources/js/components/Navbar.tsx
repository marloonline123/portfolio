import React, { useState, useContext, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { Menu, X, Moon, Sun, Code, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const NavLink: React.FC<{ href: string; title: string; onClick?: () => void }> = ({ 
  href, 
  title, 
  onClick 
}) => (
  <li>
    <a 
      href={href} 
      className="nav-link text-base py-2 px-4"
      onClick={onClick}
    >
      {title}
    </a>
  </li>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
          <Code size={28} strokeWidth={2} />
          <span className="font-bold text-xl">Abotalib</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-1">
          <li>
            <Link href="/" className="nav-link text-base py-2 px-4">
              {t('nav.home')}
            </Link>
          </li>
          <NavLink href="#about" title={t('nav.about')} />
          <NavLink href="#projects" title={t('nav.projects')} />
          <li>
            <Link href="/contact" className="nav-link text-base py-2 px-4">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Languages size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            {t('nav.lets_talk')}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden gap-2">
          <button 
            onClick={toggleLanguage} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Languages size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-card shadow-lg"
        >
          <ul className="flex flex-col py-4">
            <NavLink href="#" title={t('nav.home')} onClick={closeMenu} />
            <NavLink href="#about" title={t('nav.about')} onClick={closeMenu} />
            <NavLink href="#projects" title={t('nav.projects')} onClick={closeMenu} />
            <NavLink href="/contact" title={t('nav.contact')} onClick={closeMenu} />
            <li className="px-4 pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
              <Link href="/contact" className="btn btn-primary w-full text-center" onClick={closeMenu}>
                {t('nav.lets_talk')}
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
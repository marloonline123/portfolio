import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCode, Github, Linkedin } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { portfolioData } from '../data/portfolio';
import { useTrans } from '@/hooks/use-trans';
import { type HeroSection } from '@/types/hero-section';
import { type Tool } from '@/types/tool';
import { LanguageContext } from '@/context/LanguageContext';

interface HeroProps {
  heroSection?: HeroSection;
  tools: Tool[];
}

const Hero: React.FC<HeroProps> = ({ heroSection, tools = [] }) => {
  const { language, t } = useContext(LanguageContext);
  const trans = useTrans();

  const techStackAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const techItemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const statsAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 
    'Next.js', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'
  ];

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4 text-primary-600 dark:text-primary-400">
            <div className="h-px w-12 bg-primary-600 dark:bg-primary-400"></div>
            <p className="text-sm font-medium uppercase tracking-wider">
              {heroSection ? trans(heroSection.role) : trans(portfolioData.hero.role)}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {language === 'ar' ? (
              <>
                <span className="text-primary-600 dark:text-primary-400">
                  {heroSection ? trans(heroSection.name) : trans(portfolioData.hero.name)}
                </span> { ' ' + trans(portfolioData.hero.greeting)}
              </>
            ) : (
              <>
                {trans(portfolioData.hero.greeting) + ' '}
                <span className="text-primary-600 dark:text-primary-400">
                  {heroSection ? trans(heroSection.name) : trans(portfolioData.hero.name)}
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            {heroSection ? trans(heroSection.description) : trans(portfolioData.hero.description)}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn btn-primary">
              {trans(portfolioData.hero.viewWork)}
              <ArrowRight size={18} className={language === 'ar' ? 'rotate-180' : ''} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              {trans(portfolioData.hero.contactMe)}
            </Link>
          </div>
          
          <div className="mt-8 flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Tech Stack Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Background decorated elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full blur-2xl opacity-70"
              />
            </div>
            
            <div className="absolute right-0 bottom-0 -z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-24 h-24 bg-accent-100 dark:bg-accent-900/30 rounded-full blur-xl"
              />
            </div>
            
            {/* Code icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 0.1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <FileCode size={240} className="text-primary-600 dark:text-primary-400" />
              </motion.div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div 
                className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 text-center"
                initial="hidden"
                animate="show"
                variants={techStackAnimation}
              >
                <h3 className="font-bold text-xl mb-2">{t('hero.techStack')}</h3>
                <motion.div 
                  className="flex flex-wrap justify-center gap-2 text-xs"
                  variants={techStackAnimation}
                >
                  {tools.map((tool, index) => (
                    <motion.span 
                      key={index}
                      variants={techItemAnimation}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {trans(tool.name)}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mt-6 grid grid-cols-2 gap-4 text-sm"
                  variants={statsAnimation}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-primary-600 dark:text-primary-400 font-bold text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      {heroSection?.yearsExperience || 2}+
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-300">{t('hero.yearsExperience')}</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-primary-600 dark:text-primary-400 font-bold text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                    >
                      {heroSection?.projectsCount || 10}+
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-300">{t('hero.projects')}</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container-custom mt-20"
      >
        <div className="border-t border-gray-200 dark:border-gray-800 pt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {trans(portfolioData.hero.trustedBy)}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
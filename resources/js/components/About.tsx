import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Settings, Database, Palette, ChevronRight } from 'lucide-react';
import { useTrans } from '@/hooks/use-trans';
import { portfolioData } from '../data/portfolio';
import { AboutSection } from '@/types/about-section';
import { FieldsSection } from '@/types/fields-section';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return Code2;
    case 'Database':
      return Database;
    case 'Layers':
      return Layers;
    case 'Settings':
      return Settings;
    case 'Palette':
      return Palette;
    default:
      return Code2;
  }
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card p-6"
  >
    <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg w-fit mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

interface AboutProps {
  aboutSection?: AboutSection;
  fieldsSections?: FieldsSection[];
}

const About: React.FC<AboutProps> = ({ aboutSection, fieldsSections }: AboutProps) => {
  const trans = useTrans();
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{aboutSection?.title ? trans(aboutSection.title) : trans(portfolioData.about.title)}</h2>
          <p className="section-subtitle mx-auto">
            {aboutSection?.subtitle ? trans(aboutSection.subtitle) : trans(portfolioData.about.subtitle)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {aboutSection?.journeyDescription ? trans(aboutSection.journeyDescription) : trans(portfolioData.about.journey)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {aboutSection?.specializationDescription ? trans(aboutSection.specializationDescription) : trans(portfolioData.about.specialization)}
            </p>

            <a href="#projects" className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
              View my work
              <ChevronRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        HTML5, CSS3, JavaScript
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        React, Vue, Next.js
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        Tailwind CSS
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        PHP, Laravel
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        MySQL
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        RESTful APIs
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        Git, GitHub
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        VS Code
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        Docker
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-2">Others</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        Inertia.js
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        Responsive Design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        API Integration
                      </li>
                    </ul>
                  </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-center">{trans(portfolioData.about.whatIDo.title)}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fieldsSections && fieldsSections.length > 0 ? (
            fieldsSections.map((fieldSection) => {
              const IconComponent = getIconComponent(fieldSection.iconPath || 'Code2');
              return (
                <SkillCard
                  key={fieldSection.id}
                  icon={<IconComponent size={24} className="text-primary-600 dark:text-primary-400" />}
                  title={trans(fieldSection.name)}
                  description={trans(fieldSection.description)}
                />
              );
            })
          ) : (
            portfolioData.about.whatIDo.items.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <SkillCard
                  key={index}
                  icon={<IconComponent size={24} className="text-primary-600 dark:text-primary-400" />}
                  title={trans(item.title)}
                  description={trans(item.description)}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
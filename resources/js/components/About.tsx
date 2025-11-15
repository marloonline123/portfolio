import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Settings, Database, Palette, ChevronRight } from 'lucide-react';
import { useTrans } from '@/hooks/use-trans';
import { portfolioData } from '../data/portfolio';
import SkillCard from '@/components/public/skills/SkillCard';
import { AboutSection } from '@/types/about-section';
import { FieldsSection } from '@/types/fields-section';
import { Skill } from '@/types/skill';
import EmptyResource from './shared/EmptyResource';
import { LanguageContext } from '@/context/LanguageContext';

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

interface FieldCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FieldCard: React.FC<FieldCardProps> = ({ icon, title, description }) => (
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
  skills?: Skill[];
}

const About: React.FC<AboutProps> = ({ aboutSection, fieldsSections, skills }: AboutProps) => {
  const trans = useTrans();
  const { t } = useContext(LanguageContext);
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
            <h3 className="text-2xl font-bold mb-4">{t('about.myJourney')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {aboutSection?.journeyDescription ? trans(aboutSection.journeyDescription) : trans(portfolioData.about.journey)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {aboutSection?.specializationDescription ? trans(aboutSection.specializationDescription) : trans(portfolioData.about.specialization)}
            </p>

            <a href="#projects" className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
              {t('about.viewMyWork')}
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
              {skills && skills.length > 0 ? (
                skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))
              ) : (
                <EmptyResource
                  icon={Code2}
                  title={t('about.noSkills')}
                  description={t('about.noSkillsDescription')}
                />
              )}
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-center">{trans(portfolioData.about.whatIDo.title)}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fieldsSections && fieldsSections.length > 0 ? (
            fieldsSections.map((fieldSection) => {
              const IconComponent = getIconComponent(fieldSection.iconPath || 'Code2');
              return (
                <FieldCard
                  key={fieldSection.id}
                  icon={<IconComponent size={24} className="text-primary-600 dark:text-primary-400" />}
                  title={trans(fieldSection.name)}
                  description={trans(fieldSection.description)}
                />
              );
            })
          ) : <EmptyResource
            className="col-span-3"
            icon={Code2}
            title={t('about.noFields')}
            description={t('about.noFieldsDescription')}
          />
          }
        </div>
      </div>
    </section>
  );
};

export default About;
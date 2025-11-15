import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useTrans } from '@/hooks/use-trans';
import { LanguageContext } from '@/context/LanguageContext';
import { Category } from '@/types/category';
import { Project } from '@/types/project';

interface ProjectsProps {
  projects: Project[];
  categories: Category[];
}

const Projects: React.FC<ProjectsProps> = ({ projects, categories }) => {
  const trans = useTrans();
  const { t } = useContext(LanguageContext);
  const [category, setCategory] = useState<string>('all');

  const getRandomProjects = (projects: Project[]) => {
    const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 6);
    return randomProjects;
  };

  const filteredProjects = category === 'all'
    ? getRandomProjects(projects)
    : projects.filter(project => project.category.id.toString() === category);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('projects.subtitle')}
          </p>
          <div className="mt-6">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              {t('projects.viewAllProjects')}
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              key="all"
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${category === 'all'
                  ? 'bg-white dark:bg-dark-card shadow-sm text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {t('projects.all')}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id.toString())}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${category === cat.id.toString()
                    ? 'bg-white dark:bg-dark-card shadow-sm text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {trans(cat.name)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden"
            >
              {/* Project image */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={project.imagePath}
                  alt={trans(project.title)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-primary-600 hover:bg-primary-700 p-2 rounded-full"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{trans(project.title)}</h3>
                  <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                    {trans(project.category.name)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {trans(project.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
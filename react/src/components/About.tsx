import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Settings, Database, Palette, ChevronRight } from 'lucide-react';

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

const About: React.FC = () => {
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            I'm a passionate full-stack developer with 2 years of freelance experience creating 
            modern, functional, and user-friendly applications.
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
              Over the past 2 years, I've worked as a freelance developer building various applications 
              ranging from marketing websites to complex inventory systems. My approach focuses on creating 
              clean, efficient code that delivers exceptional user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I specialize in both frontend and backend development, with particular expertise in React, Vue, 
              Laravel, and Next.js. I'm passionate about staying up-to-date with the latest technologies and 
              best practices in the industry.
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

        <h3 className="text-2xl font-bold mb-6 text-center">What I Can Do</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            icon={<Code2 size={24} className="text-primary-600 dark:text-primary-400" />}
            title="Frontend Development"
            description="Create responsive, intuitive user interfaces with modern frameworks."
          />
          <SkillCard 
            icon={<Database size={24} className="text-primary-600 dark:text-primary-400" />}
            title="Backend Development"
            description="Build robust server-side applications and APIs with Laravel." 
          />
          <SkillCard 
            icon={<Layers size={24} className="text-primary-600 dark:text-primary-400" />}
            title="Full-Stack Solutions"
            description="Develop end-to-end applications with seamless frontend and backend integration."
          />
          <SkillCard 
            icon={<Settings size={24} className="text-primary-600 dark:text-primary-400" />}
            title="System Architecture"
            description="Design scalable, maintainable application architecture and data models."
          />
          <SkillCard 
            icon={<Palette size={24} className="text-primary-600 dark:text-primary-400" />}
            title="UI/UX Implementation"
            description="Transform designs into functional, beautiful web interfaces."
          />
          <SkillCard 
            icon={<Database size={24} className="text-primary-600 dark:text-primary-400" />}
            title="Database Design"
            description="Create efficient database schemas and optimize queries for performance."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
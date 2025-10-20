export type ProjectCategory = 'web' | 'mobile' | 'system';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bouh Marketing Website",
    description: "Marketing automation platform for feasibility studies, marketing plans, and research.",
    category: 'web',
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    demoLink: "https://example.com/bouh-marketing"
  },
  {
    id: 2,
    title: "Nadara POS & Inventory",
    description: "Complete point of sale system with invoicing, stock management via CSV, and WhatsApp integration.",
    category: 'system',
    image: "https://images.pexels.com/photos/8867429/pexels-photo-8867429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
    demoLink: "https://example.com/nadara-pos"
  },
  {
    id: 3,
    title: "Full Social Media App",
    description: "Social platform with post creation, GPT content generation, and real-time notifications.",
    category: 'web',
    image: "https://images.pexels.com/photos/5967861/pexels-photo-5967861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['Laravel', 'Vue.js', 'Pusher', 'Tailwind CSS'],
    demoLink: "https://example.com/social-app"
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, customers, and analytics.",
    category: 'web',
    image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'MySQL'],
    demoLink: "https://example.com/ecommerce-dashboard"
  },
  {
    id: 5,
    title: "Meal Planner App",
    description: "Mobile application for planning weekly meals with grocery list integration.",
    category: 'mobile',
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoLink: "https://example.com/meal-planner",
    githubLink: "https://github.com/example/meal-planner"
  },
  {
    id: 6,
    title: "Task Management Platform",
    description: "Project management system with task assignments, due dates, and progress tracking.",
    category: 'system',
    image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    demoLink: "https://example.com/task-manager"
  }
];
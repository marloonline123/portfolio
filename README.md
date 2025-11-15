# Larafolio

| |
|:--:|
| ![Larafolio](https://i.ibb.co/gb1tvvFj/Larafolio.png) |


A modern, responsive portfolio website built with Laravel and React, featuring a comprehensive dashboard for content management. This application showcases projects, skills, and provides an easy way to manage portfolio content through an intuitive admin interface.

## 🚀 Tech Stack

### Backend
- **Laravel 12** - PHP web framework
- **PHP 8.2+** - Server-side scripting
- **Inertia.js** - Modern monolith architecture
- **Laravel Fortify** - Authentication scaffolding
- **Spatie Laravel Translatable** - Multi-language support
- **Ziggy** - JavaScript route helper
- **MySQL** - Database

### Frontend
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **Radix UI** - Accessible UI components
- **i18next** - Internationalization framework
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Composer** - PHP dependency management
- **NPM** - Node package management
- **PHPUnit** - Testing framework

## ✨ Features

### Public Portfolio
- **Hero Section** - Dynamic introduction with role and description
- **About Section** - Detailed information about skills and experience
- **Projects Showcase** - Filterable project gallery with categories
- **Contact Form** - Direct communication channel
- **Responsive Design** - Optimized for all devices
- **Multi-language Support** - English and Arabic translations
- **Dark/Light Theme** - User preference-based theming

### Admin Dashboard
- **Content Management** - CRUD operations for all portfolio sections
- **Project Management** - Add, edit, and categorize projects
- **Skill Management** - Organize technical skills and tools
- **Hero Section Editor** - Customize landing page content
- **About Section Editor** - Manage personal information
- **Contact Page Management** - Handle contact form submissions
- **User Authentication** - Secure login with two-factor authentication
- **File Upload** - Image management for projects and profile

### Technical Features
- **Server-Side Rendering (SSR)** - Improved SEO and performance
- **API Integration** - RESTful API endpoints
- **Database Optimization** - Efficient queries and caching
- **Security** - CSRF protection, input validation, and secure authentication
- **Performance** - Optimized assets and lazy loading
- **Accessibility** - WCAG compliant components

## 📦 Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js 18+ and npm
- MySQL or another supported database

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment configuration**
   ```bash
   cp .env.example .env
   ```
   Configure your database and other settings in `.env`

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

7. **Build assets**
   ```bash
   npm run build
   ```

## 🚀 Usage

### Development
Start the development servers:
```bash
composer run dev
```
This command runs Laravel, queue worker, and Vite dev server concurrently.

### Production
For production deployment:
```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Server-Side Rendering
To enable SSR:
```bash
composer run dev:ssr
```

### Testing
Run the test suite:
```bash
composer run test
```

### Code Quality
Format code:
```bash
npm run format
```

Lint code:
```bash
npm run lint
```

Check TypeScript types:
```bash
npm run types
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abotalib Adam**
- Full Stack Developer
- Email: abotalibx752@gmail.com

---

Built with ❤️ using Laravel and React

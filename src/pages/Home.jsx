import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaServer, FaCogs, FaShieldAlt, FaUserLock, 
  FaLayerGroup, FaCode, FaDesktop, FaDatabase
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'

// Placeholder for hero image - replace with actual image path
const heroImage = "/assets/images/dashboard-preview.png"

const features = [
  {
    title: 'Multi-Tenant Architecture',
    description: 'Secure isolation between tenants with flexible database strategies',
    icon: FaServer,
    link: '/multi-tenancy'
  },
  {
    title: 'Core Technologies',
    description: 'Built with ASP.NET Core, Entity Framework, SQL Server',
    icon: FaCogs,
    link: '/core-technologies'
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade authentication, authorization & data protection',
    icon: FaShieldAlt,
    link: '/security'
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permission system for tenant admins and users',
    icon: FaUserLock,
    link: '/security'
  },
  {
    title: 'Design Patterns',
    description: 'Clean architecture with CQRS, Repository, and Unit of Work patterns',
    icon: FaLayerGroup,
    link: '/design-patterns'
  },
  {
    title: 'API-First Approach',
    description: 'RESTful API with OpenAPI documentation and versioning',
    icon: FaCode,
    link: '/architecture'
  },
  {
    title: 'Modern Frontend',
    description: 'Built with Angular, RxJS, and Material components',
    icon: FaDesktop,
    link: '/frontend'
  },
  {
    title: 'Scalable Data Model',
    description: "Flexible schema that adapts to each tenant's needs",
    icon: FaDatabase,
    link: '/architecture'
  }
]

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Office Management SaaS
              <span className="text-primary-600 block mt-2">Documentation</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 md:pr-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A comprehensive guide to our multi-tenant SaaS platform for office management, 
              built with modern technologies and following best practices.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/overview" 
                className="btn btn-primary px-6 py-3"
              >
                Explore Documentation
              </Link>
              
              <Link 
                to="/architecture" 
                className="btn border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 px-6 py-3"
              >
                View Architecture
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img 
              src={heroImage} 
              alt="SaaS Office Dashboard Preview" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <AnimatedSection className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Key System Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 hover:shadow-lg transition-shadow"
              delay={index * 0.1}
            >
              <div className="mb-4 text-primary-600 dark:text-primary-400">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                Learn more →
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      
      {/* Technologies Overview */}
      <AnimatedSection className="py-12 bg-gray-50 dark:bg-gray-800/50 -mx-4 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Built with Modern Technologies
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['.NET Core', 'SQL Server', 'Entity Framework', 'Angular', 'RxJS', 'JWT', 'Identity', 'REST API', 'OAuth 2.0', 'Material UI', 'Bootstrap', 'SCSS'].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg py-3 px-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Getting Started CTA */}
      <AnimatedSection className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Ready to Explore the System?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Dive into our detailed documentation to understand the architecture,
          technologies, and implementation details of our SaaS platform.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            to="/overview" 
            className="btn btn-primary px-6 py-3"
          >
            Start with Overview
          </Link>
          
          <Link 
            to="/architecture" 
            className="btn border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 px-6 py-3"
          >
            Explore Architecture
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Home

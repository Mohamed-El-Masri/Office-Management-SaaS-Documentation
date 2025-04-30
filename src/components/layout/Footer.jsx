import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-12 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Office Management SaaS Documentation
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/your-repo" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://twitter.com/your-account" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

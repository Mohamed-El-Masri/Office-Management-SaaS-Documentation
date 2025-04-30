import { Link } from 'react-router-dom'
import { FaBars, FaSun, FaMoon } from 'react-icons/fa'
import logo from '../../assets/logo.svg'

const Header = ({ toggleSidebar, toggleTheme, theme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-800 dark:text-white">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaBars className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Office SaaS" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Office SaaS Documentation
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            <Link 
              to="/overview" 
              className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Overview
            </Link>
            <Link 
              to="/architecture" 
              className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Architecture
            </Link>
            <a 
              href="https://github.com/your-repo" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

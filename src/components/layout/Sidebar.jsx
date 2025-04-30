import { Link, useLocation } from 'react-router-dom'
import { 
  FaTimes, FaHome, FaLayerGroup, FaCogs, 
  FaCubes, FaUserShield, FaServer, FaDesktop, FaCode
} from 'react-icons/fa'

const navItems = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/overview', label: 'Overview', icon: <FaLayerGroup /> },
  { to: '/architecture', label: 'Architecture', icon: <FaCubes /> },
  { to: '/core-technologies', label: 'Core Technologies', icon: <FaCogs /> },
  { to: '/design-patterns', label: 'Design Patterns', icon: <FaCode /> },
  { to: '/multi-tenancy', label: 'Multi-Tenancy', icon: <FaServer /> },
  { to: '/security', label: 'Security Measures', icon: <FaUserShield /> },
  { to: '/frontend', label: 'Frontend Tech', icon: <FaDesktop /> },
]

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation()
  
  const NavLink = ({ to, label, icon }) => (
    <Link 
      to={to}
      onClick={closeSidebar}
      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
        location.pathname === to 
          ? 'bg-primary-50 text-primary-600 font-medium dark:bg-gray-700 dark:text-primary-400'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  )
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 dark:text-white
          shadow-lg z-50 transform transition-transform lg:translate-x-0 lg:static lg:h-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between lg:hidden">
          <h2 className="font-bold text-lg">Documentation</h2>
          <button 
            onClick={closeSidebar}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="p-3">
          {navItems.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              label={item.label} 
              icon={item.icon} 
            />
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

import { motion } from 'framer-motion'

const TechnologyCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color = 'primary',
  className = '' 
}) => {
  const colorClasses = {
    primary: 'border-primary-200 bg-primary-50 text-primary-800 dark:bg-gray-800 dark:text-primary-300 dark:border-primary-900',
    secondary: 'border-secondary-200 bg-secondary-50 text-secondary-800 dark:bg-gray-800 dark:text-secondary-300 dark:border-secondary-900',
    info: 'border-blue-200 bg-blue-50 text-blue-800 dark:bg-gray-800 dark:text-blue-300 dark:border-blue-900',
    success: 'border-green-200 bg-green-50 text-green-800 dark:bg-gray-800 dark:text-green-300 dark:border-green-900',
    warning: 'border-amber-200 bg-amber-50 text-amber-800 dark:bg-gray-800 dark:text-amber-300 dark:border-amber-900',
    danger: 'border-red-200 bg-red-50 text-red-800 dark:bg-gray-800 dark:text-red-300 dark:border-red-900',
  }
  
  return (
    <motion.div 
      className={`
        flex flex-col p-5 rounded-lg shadow-sm border
        hover:shadow-md transition-shadow
        ${colorClasses[color]} ${className}
      `}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className="h-8 w-8" />
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      
      <p className="text-sm">{description}</p>
    </motion.div>
  )
}

export default TechnologyCard

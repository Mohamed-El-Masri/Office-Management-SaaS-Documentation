import React from 'react';
import { motion } from 'framer-motion';

const TechnologyIcon = ({ icon, name, description, category }) => {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center transition-all hover:shadow-md"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-4xl text-primary-600 dark:text-primary-400 mb-3">
        {icon}
      </div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <div className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded-full mb-2">
        {category}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default TechnologyIcon;

import React from 'react';
import { FaReact, FaGithub, FaNpm } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io5';

const IconDemo = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">React Icons Demo</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl text-blue-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">React</span>
        </div>
        
        <div className="flex flex-col items-center">
          <FaGithub className="text-5xl text-gray-800 dark:text-gray-200 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">GitHub</span>
        </div>
        
        <div className="flex flex-col items-center">
          <FaNpm className="text-5xl text-red-600 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">NPM</span>
        </div>
        
        <div className="flex flex-col items-center">
          <MdDashboard className="text-5xl text-green-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">Dashboard</span>
        </div>
        
        <div className="flex flex-col items-center">
          <MdSettings className="text-5xl text-purple-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">Settings</span>
        </div>
        
        <div className="flex flex-col items-center">
          <IoLogoJavascript className="text-5xl text-yellow-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Import icons from different collections like:
        </p>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
          <li>react-icons/fa - Font Awesome</li>
          <li>react-icons/md - Material Design</li>
          <li>react-icons/io - Ionicons</li>
          <li>react-icons/ai - Ant Design</li>
          <li>react-icons/bs - Bootstrap</li>
          <li>react-icons/fi - Feather</li>
          <li>And many more...</li>
        </ul>
      </div>
    </div>
  );
};

export default IconDemo;

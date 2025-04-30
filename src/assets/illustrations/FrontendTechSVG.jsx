import React from 'react';

const FrontendTechSVG = ({ width = 800, height = 500, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Angular Logo */}
      <g transform="translate(350, 50)">
        <path d="M50,0 L100,35 L90,85 L50,100 L10,85 L0,35 L50,0" fill="#DD0031" />
        <path d="M50,0 L100,35 L90,85 L50,100 L50,0" fill="#C3002F" />
        <text x="50" y="125" fontSize="16" fontWeight="bold" fill="#333" textAnchor="middle">Angular</text>
      </g>
      
      {/* Component Architecture */}
      <g transform="translate(150, 200)">
        <rect x="0" y="0" width="220" height="180" rx="8" fill="#F9FAFB" stroke="#6B7280" strokeWidth="2" />
        <rect x="20" y="15" width="180" height="30" rx="4" fill="#6B7280" />
        <text x="110" y="35" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Component Architecture</text>
        
        <rect x="20" y="60" width="80" height="40" rx="4" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1" />
        <text x="60" y="85" fontSize="12" fill="#4B5563" textAnchor="middle">Header</text>
        
        <rect x="120" y="60" width="80" height="40" rx="4" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1" />
        <text x="160" y="85" fontSize="12" fill="#4B5563" textAnchor="middle">Navigation</text>
        
        <rect x="20" y="120" width="180" height="40" rx="4" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1" />
        <text x="110" y="145" fontSize="12" fill="#4B5563" textAnchor="middle">Content Area</text>
      </g>
      
      {/* State Management */}
      <g transform="translate(430, 200)">
        <rect x="0" y="0" width="220" height="180" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
        <rect x="20" y="15" width="180" height="30" rx="4" fill="#3B82F6" />
        <text x="110" y="35" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">State Management</text>
        
        <rect x="70" y="60" width="80" height="40" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
        <text x="110" y="85" fontSize="12" fill="#1E40AF" textAnchor="middle">Store</text>
        
        <path d="M110 100 L60 120" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M110 100 L110 120" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M110 100 L160 120" stroke="#3B82F6" strokeWidth="1.5" />
        
        <rect x="20" y="120" width="80" height="40" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
        <text x="60" y="140" fontSize="10" fill="#1E40AF" textAnchor="middle">Actions</text>
        
        <rect x="120" y="120" width="80" height="40" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
        <text x="160" y="140" fontSize="10" fill="#1E40AF" textAnchor="middle">Reducers</text>
        
        <rect x="70" y="180" width="80" height="40" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" displayNone="true" />
        <text x="110" y="200" fontSize="10" fill="#1E40AF" textAnchor="middle" displayNone="true">Effects</text>
      </g>

      {/* Responsive Design */}
      <g transform="translate(150, 420)">
        <rect x="0" y="0" width="140" height="30" rx="4" fill="#4F46E5" />
        <text x="70" y="20" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Desktop</text>
        
        <rect x="160" y="5" width="80" height="25" rx="4" fill="#7C3AED" />
        <text x="200" y="20" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Tablet</text>
        
        <rect x="260" y="10" width="40" height="20" rx="4" fill="#8B5CF6" />
        <text x="280" y="23" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">Mobile</text>
        
        <text x="150" y="50" fontSize="14" fontWeight="bold" fill="#4B5563" textAnchor="middle">Responsive Design</text>
      </g>
      
      {/* Internationalization */}
      <g transform="translate(470, 420)">
        <rect x="0" y="0" width="180" height="40" rx="8" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
        <text x="90" y="25" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">Internationalization</text>
        <text x="50" y="50" fontSize="12" fontWeight="normal" fill="#047857" textAnchor="middle">English</text>
        <text x="140" y="50" fontSize="12" fontWeight="normal" fill="#047857" textAnchor="middle">العربية</text>
        <line x1="90" y1="40" x2="90" y2="55" stroke="#10B981" strokeWidth="1" />
      </g>
      
      {/* Title */}
      <rect x="250" y="10" width="300" height="40" rx="8" fill="#F3F4F6" />
      <text x="400" y="35" fontSize="18" fontWeight="bold" fill="#1F2937" textAnchor="middle">Frontend Technologies</text>
    </svg>
  );
};

export default FrontendTechSVG;

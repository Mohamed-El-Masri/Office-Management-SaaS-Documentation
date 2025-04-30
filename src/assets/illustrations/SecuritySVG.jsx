import React from 'react';

const SecuritySVG = ({ width = 800, height = 400, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield Base */}
      <path 
        d="M400 50L550 100V200C550 284.64 483.36 350 400 350C316.64 350 250 284.64 250 200V100L400 50Z" 
        fill="#4F46E5" 
        fillOpacity="0.2" 
        stroke="#4F46E5" 
        strokeWidth="8"
      />
      
      {/* Lock */}
      <rect x="350" y="175" width="100" height="80" rx="10" fill="#4338CA" />
      <rect x="375" y="130" width="50" height="60" rx="25" stroke="#4338CA" strokeWidth="12" fill="none" />
      <circle cx="400" cy="215" r="15" fill="white" />
      <rect x="397" y="200" width="6" height="25" rx="3" fill="white" />
      
      {/* Security Layers */}
      <g opacity="0.8">
        {/* Authentication Layer */}
        <rect x="150" y="50" width="150" height="60" rx="8" fill="#10B981" />
        <text x="225" y="85" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Authentication</text>
        <line x1="270" y1="80" x2="320" y2="120" stroke="#10B981" strokeWidth="2" />
        
        {/* Authorization Layer */}
        <rect x="150" y="150" width="150" height="60" rx="8" fill="#F59E0B" />
        <text x="225" y="185" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Authorization</text>
        <line x1="270" y1="180" x2="320" y2="200" stroke="#F59E0B" strokeWidth="2" />
        
        {/* Data Encryption Layer */}
        <rect x="150" y="250" width="150" height="60" rx="8" fill="#EF4444" />
        <text x="225" y="285" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Data Encryption</text>
        <line x1="270" y1="280" x2="320" y2="260" stroke="#EF4444" strokeWidth="2" />
        
        {/* Monitoring Layer */}
        <rect x="500" y="50" width="150" height="60" rx="8" fill="#6366F1" />
        <text x="575" y="85" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Monitoring</text>
        <line x1="530" y1="80" x2="480" y2="120" stroke="#6366F1" strokeWidth="2" />
        
        {/* Compliance Layer */}
        <rect x="500" y="150" width="150" height="60" rx="8" fill="#8B5CF6" />
        <text x="575" y="185" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Compliance</text>
        <line x1="530" y1="180" x2="480" y2="200" stroke="#8B5CF6" strokeWidth="2" />
        
        {/* Intrusion Detection */}
        <rect x="500" y="250" width="150" height="60" rx="8" fill="#EC4899" />
        <text x="575" y="285" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Intrusion Detection</text>
        <line x1="530" y1="280" x2="480" y2="260" stroke="#EC4899" strokeWidth="2" />
      </g>
      
      {/* Legend */}
      <rect x="250" y="350" width="300" height="30" rx="4" fill="#F3F4F6" />
      <text x="400" y="370" fontSize="14" fill="#1F2937" textAnchor="middle">Multi-layered Security Architecture</text>
    </svg>
  );
};

export default SecuritySVG;

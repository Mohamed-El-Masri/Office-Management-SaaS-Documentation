import React from 'react';

const TechStackSVG = ({ width = 800, height = 600, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Base Platform */}
      <rect x="100" y="450" width="600" height="50" rx="10" fill="#0078D4" />
      <text x="400" y="483" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">ASP.NET Core 8</text>
      
      {/* Middle Layer - Data & Services */}
      <rect x="150" y="350" width="200" height="70" rx="10" fill="#5C2D91" />
      <text x="250" y="390" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">Entity Framework Core</text>
      
      <rect x="450" y="350" width="200" height="70" rx="10" fill="#5C2D91" />
      <text x="550" y="390" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">Identity Framework</text>
      
      {/* Database */}
      <rect x="250" y="250" width="300" height="70" rx="10" fill="#CC2927" />
      <text x="400" y="290" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">SQL Server</text>
      
      {/* Top Layer - API */}
      <rect x="200" y="150" width="400" height="70" rx="10" fill="#3C8527" />
      <text x="400" y="190" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">RESTful API</text>
      
      {/* Front-End */}
      <rect x="300" y="50" width="200" height="70" rx="10" fill="#F25022" />
      <text x="400" y="90" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">Angular Front-End</text>
      
      {/* Connection Lines */}
      <line x1="400" y1="120" x2="400" y2="150" stroke="#666" strokeWidth="2" />
      <line x1="400" y1="220" x2="400" y2="250" stroke="#666" strokeWidth="2" />
      <line x1="250" y1="320" x2="250" y2="350" stroke="#666" strokeWidth="2" />
      <line x1="550" y1="320" x2="550" y2="350" stroke="#666" strokeWidth="2" />
      <line x1="250" y1="420" x2="250" y2="450" stroke="#666" strokeWidth="2" />
      <line x1="550" y1="420" x2="550" y2="450" stroke="#666" strokeWidth="2" />
    </svg>
  );
};

export default TechStackSVG;

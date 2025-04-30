import React from 'react';

const MultiTenancySVG = ({ width = 800, height = 600, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Application Layer */}
      <rect x="250" y="50" width="300" height="100" rx="10" fill="#0078D4" />
      <text x="400" y="105" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">SaaS Application</text>
      
      {/* Tenant Resolver */}
      <rect x="300" y="180" width="200" height="60" rx="10" fill="#3C8527" />
      <text x="400" y="215" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Tenant Resolver</text>
      
      {/* Connection Line */}
      <line x1="400" y1="150" x2="400" y2="180" stroke="#666" strokeWidth="2" />
      
      {/* Tenant Contexts */}
      <rect x="150" y="280" width="150" height="80" rx="10" fill="#5C2D91" />
      <text x="225" y="320" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Tenant A Context</text>
      
      <rect x="325" y="280" width="150" height="80" rx="10" fill="#5C2D91" />
      <text x="400" y="320" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Tenant B Context</text>
      
      <rect x="500" y="280" width="150" height="80" rx="10" fill="#5C2D91" />
      <text x="575" y="320" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Tenant C Context</text>
      
      {/* Connection Lines */}
      <line x1="225" y1="240" x2="225" y2="280" stroke="#666" strokeWidth="2" />
      <line x1="400" y1="240" x2="400" y2="280" stroke="#666" strokeWidth="2" />
      <line x1="575" y1="240" x2="575" y2="280" stroke="#666" strokeWidth="2" />
      <line x1="400" y1="240" x2="225" y2="240" stroke="#666" strokeWidth="2" />
      <line x1="400" y1="240" x2="575" y2="240" stroke="#666" strokeWidth="2" />
      
      {/* Databases */}
      <rect x="150" y="400" width="150" height="80" rx="10" fill="#CC2927" />
      <circle cx="225" cy="440" r="30" fill="#fff" />
      <text x="225" y="445" fontSize="14" fontWeight="bold" fill="#CC2927" textAnchor="middle">DB A</text>
      
      <rect x="325" y="400" width="150" height="80" rx="10" fill="#CC2927" />
      <circle cx="400" cy="440" r="30" fill="#fff" />
      <text x="400" y="445" fontSize="14" fontWeight="bold" fill="#CC2927" textAnchor="middle">DB B</text>
      
      <rect x="500" y="400" width="150" height="80" rx="10" fill="#CC2927" />
      <circle cx="575" cy="440" r="30" fill="#fff" />
      <text x="575" y="445" fontSize="14" fontWeight="bold" fill="#CC2927" textAnchor="middle">DB C</text>
      
      {/* Connection Lines */}
      <line x1="225" y1="360" x2="225" y2="400" stroke="#666" strokeWidth="2" />
      <line x1="400" y1="360" x2="400" y2="400" stroke="#666" strokeWidth="2" />
      <line x1="575" y1="360" x2="575" y2="400" stroke="#666" strokeWidth="2" />
      
      {/* Legend */}
      <rect x="650" y="520" width="20" height="20" fill="#0078D4" />
      <text x="680" y="535" fontSize="14" fill="#333" dominantBaseline="middle">Application Layer</text>
      
      <rect x="650" y="550" width="20" height="20" fill="#5C2D91" />
      <text x="680" y="565" fontSize="14" fill="#333" dominantBaseline="middle">Data Access Layer</text>
      
      <rect x="650" y="580" width="20" height="20" fill="#CC2927" />
      <text x="680" y="595" fontSize="14" fill="#333" dominantBaseline="middle">Database Layer</text>
    </svg>
  );
};

export default MultiTenancySVG;

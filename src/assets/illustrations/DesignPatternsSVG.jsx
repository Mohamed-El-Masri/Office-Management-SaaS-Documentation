import React from 'react';

const DesignPatternsSVG = ({ width = 800, height = 600, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* MVC Pattern */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#0EA5E9" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">MVC Pattern</text>
        
        <rect x="20" y="70" width="45" height="70" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="42.5" y="105" fontSize="12" fill="#0369A1" textAnchor="middle">Model</text>
        
        <rect x="77.5" y="70" width="45" height="70" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="100" y="105" fontSize="12" fill="#0369A1" textAnchor="middle">View</text>
        
        <rect x="135" y="70" width="45" height="70" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="157.5" y="105" fontSize="12" fill="#0369A1" textAnchor="middle">Controller</text>
      </g>
      
      {/* Repository Pattern */}
      <g transform="translate(300, 50)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#10B981" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Repository Pattern</text>
        
        <rect x="20" y="70" width="160" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="100" y="90" fontSize="12" fill="#047857" textAnchor="middle">IRepository</text>
        
        <path d="M100 100 L100 115" stroke="#10B981" strokeWidth="2" />
        
        <rect x="20" y="115" width="70" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="55" y="135" fontSize="10" fill="#047857" textAnchor="middle">SQLRepository</text>
        
        <rect x="110" y="115" width="70" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="145" y="135" fontSize="10" fill="#047857" textAnchor="middle">MockRepository</text>
      </g>
      
      {/* CQRS Pattern */}
      <g transform="translate(550, 50)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#8B5CF6" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">CQRS Pattern</text>
        
        <rect x="20" y="70" width="70" height="70" rx="4" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
        <text x="55" y="95" fontSize="12" fill="#6D28D9" textAnchor="middle">Commands</text>
        <text x="55" y="115" fontSize="10" fill="#6D28D9" textAnchor="middle">(Write)</text>
        
        <rect x="110" y="70" width="70" height="70" rx="4" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
        <text x="145" y="95" fontSize="12" fill="#6D28D9" textAnchor="middle">Queries</text>
        <text x="145" y="115" fontSize="10" fill="#6D28D9" textAnchor="middle">(Read)</text>
      </g>
      
      {/* Dependency Injection */}
      <g transform="translate(50, 260)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#EF4444" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Dependency Injection</text>
        
        <rect x="20" y="70" width="160" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="100" y="90" fontSize="12" fill="#B91C1C" textAnchor="middle">Service Container</text>
        
        <path d="M100 100 L60 115 M100 100 L100 115 M100 100 L140 115" stroke="#EF4444" strokeWidth="2" />
        
        <rect x="20" y="115" width="45" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="42.5" y="135" fontSize="10" fill="#B91C1C" textAnchor="middle">Service A</text>
        
        <rect x="77.5" y="115" width="45" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="100" y="135" fontSize="10" fill="#B91C1C" textAnchor="middle">Service B</text>
        
        <rect x="135" y="115" width="45" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="157.5" y="135" fontSize="10" fill="#B91C1C" textAnchor="middle">Service C</text>
      </g>
      
      {/* Clean Architecture */}
      <g transform="translate(300, 260)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#F97316" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Clean Architecture</text>
        
        <circle cx="100" cy="110" r="60" fill="#FFEDD5" stroke="#F97316" strokeWidth="2" />
        <circle cx="100" cy="110" r="45" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />
        <circle cx="100" cy="110" r="30" fill="#FDBA74" stroke="#F97316" strokeWidth="2" />
        <circle cx="100" cy="110" r="15" fill="#FB923C" stroke="#F97316" strokeWidth="2" />
        
        <text x="100" y="110" fontSize="10" fill="#7C2D12" textAnchor="middle">Domain</text>
        <text x="100" y="90" fontSize="9" fill="#7C2D12" textAnchor="middle">Application</text>
        <text x="100" y="150" fontSize="9" fill="#7C2D12" textAnchor="middle">Infrastructure</text>
        <text x="40" y="110" fontSize="9" fill="#7C2D12" textAnchor="middle">UI</text>
      </g>
      
      {/* Observer Pattern */}
      <g transform="translate(550, 260)">
        <rect x="0" y="0" width="200" height="160" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#10B981" />
        <text x="100" y="40" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Observer Pattern</text>
        
        <rect x="60" y="70" width="80" height="40" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="100" y="95" fontSize="12" fill="#047857" textAnchor="middle">Subject</text>
        
        <path d="M100 110 L100 130 M100 130 L60 140 M100 130 L100 140 M100 130 L140 140" stroke="#10B981" strokeWidth="2" />
        
        <rect x="30" y="140" width="60" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="60" y="160" fontSize="10" fill="#047857" textAnchor="middle">Observer 1</text>
        
        <rect x="70" y="140" width="60" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="100" y="160" fontSize="10" fill="#047857" textAnchor="middle">Observer 2</text>
        
        <rect x="110" y="140" width="60" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <text x="140" y="160" fontSize="10" fill="#047857" textAnchor="middle">Observer 3</text>
      </g>
      
      {/* Pattern Connection Lines */}
      <line x1="150" y1="230" x2="150" y2="245" stroke="#4B5563" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="400" y1="230" x2="400" y2="245" stroke="#4B5563" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="650" y1="230" x2="650" y2="245" stroke="#4B5563" strokeWidth="1" strokeDasharray="5,5" />
      
      {/* Title */}
      <rect x="250" y="480" width="300" height="40" rx="8" fill="#F3F4F6" />
      <text x="400" y="505" fontSize="18" fontWeight="bold" fill="#1F2937" textAnchor="middle">Key Design Patterns</text>
    </svg>
  );
};

export default DesignPatternsSVG;

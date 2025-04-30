import React from 'react';

const SaasFlowSVG = ({ width = 800, height = 400, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flow Steps */}
      <g>
        {/* Sign Up */}
        <rect x="50" y="150" width="120" height="80" rx="8" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
        <text x="110" y="180" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Sign Up</text>
        <text x="110" y="200" fontSize="12" fill="#0369A1" textAnchor="middle">User Registration</text>
        
        {/* Email Verification */}
        <rect x="220" y="150" width="120" height="80" rx="8" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
        <text x="280" y="180" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Verification</text>
        <text x="280" y="200" fontSize="12" fill="#0369A1" textAnchor="middle">Email Confirmation</text>
        
        {/* Trial Activation */}
        <rect x="390" y="150" width="120" height="80" rx="8" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
        <text x="450" y="180" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Trial</text>
        <text x="450" y="200" fontSize="12" fill="#0369A1" textAnchor="middle">Free Trial Period</text>
        
        {/* Subscription */}
        <rect x="560" y="150" width="120" height="80" rx="8" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
        <text x="620" y="180" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Subscription</text>
        <text x="620" y="200" fontSize="12" fill="#0369A1" textAnchor="middle">Payment Processing</text>
      </g>
      
      {/* Flow Arrows */}
      <g>
        <path d="M170 190 L220 190" stroke="#0EA5E9" strokeWidth="2" />
        <polygon points="215,185 225,190 215,195" fill="#0EA5E9" />
        
        <path d="M340 190 L390 190" stroke="#0EA5E9" strokeWidth="2" />
        <polygon points="385,185 395,190 385,195" fill="#0EA5E9" />
        
        <path d="M510 190 L560 190" stroke="#0EA5E9" strokeWidth="2" />
        <polygon points="555,185 565,190 555,195" fill="#0EA5E9" />
        
        {/* Renewal Arrow */}
        <path d="M620 230 L620 260 L110 260 L110 230" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4,4" />
        <polygon points="105,235 110,225 115,235" fill="#0EA5E9" />
      </g>
      
      {/* User Journey Indicator */}
      <g>
        <rect x="50" y="50" width="630" height="50" rx="8" fill="#DBEAFE" />
        <text x="365" y="80" fontSize="16" fontWeight="bold" fill="#1E40AF" textAnchor="middle">User Journey in SaaS Platform</text>
      </g>
      
      {/* Status Indicators */}
      <g>
        <rect x="100" y="300" width="20" height="20" rx="4" fill="#34D399" />
        <text x="130" y="315" fontSize="14" fill="#333" textAnchor="start">Active</text>
        
        <rect x="200" y="300" width="20" height="20" rx="4" fill="#FBBF24" />
        <text x="230" y="315" fontSize="14" fill="#333" textAnchor="start">Trial</text>
        
        <rect x="300" y="300" width="20" height="20" rx="4" fill="#EF4444" />
        <text x="330" y="315" fontSize="14" fill="#333" textAnchor="start">Expired</text>
        
        <rect x="400" y="300" width="20" height="20" rx="4" fill="#A78BFA" />
        <text x="430" y="315" fontSize="14" fill="#333" textAnchor="start">Suspended</text>
      </g>
    </svg>
  );
};

export default SaasFlowSVG;

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);
  
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const displayCode = showAll || code.split('\n').length <= 20 
    ? code 
    : code.split('\n').slice(0, 20).join('\n') + '\n// ...more code...';
  
  return (
    <div className="rounded-lg overflow-hidden mb-6">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b dark:border-gray-700 flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <button 
            onClick={copyToClipboard} 
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1"
            aria-label="Copy code"
          >
            {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
          </button>
        </div>
      )}
      
      <div className="relative">
        <SyntaxHighlighter 
          language={language || 'javascript'}
          style={isDarkMode ? vscDarkPlus : vs}
          showLineNumbers
          wrapLines
          customStyle={{
            margin: 0,
            borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
            fontSize: '0.9rem',
          }}
        >
          {displayCode}
        </SyntaxHighlighter>
        
        {code.split('\n').length > 20 && !showAll && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1 rounded-t-md text-sm"
            >
              Show all code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;

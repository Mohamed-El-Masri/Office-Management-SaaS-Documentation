import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ code, language, title }) => {
  return (
    <div className="rounded-md overflow-hidden bg-gray-800 shadow-md">
      {title && (
        <div className="bg-gray-700 px-4 py-2 text-sm font-medium text-white">
          {title}
        </div>
      )}
      <div className="overflow-auto max-h-[500px]">
        <SyntaxHighlighter
          language={language || 'javascript'}
          style={vs2015}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: '1.25rem',
            fontSize: '0.875rem',
            borderRadius: title ? '0' : '0.375rem',
          }}
          lineNumberStyle={{ color: '#6e7681' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;

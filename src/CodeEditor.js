import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <textarea
        value={code}
        onChange={handleChange}
        style={{ width: '50%', height: '300px', fontSize: '16px', fontFamily: 'monospace' }}
      />
      <div style={{ width: '50%', height: '300px', overflow: 'auto', background: '#2d2d2d', color: '#f8f8f2' }}>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;

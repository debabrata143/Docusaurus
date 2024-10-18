// src/components/SolutionDescription.js

import React, { useState } from 'react';

const SolutionDescription = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        style={{ width: '100%', padding: '0px', border:'0', lineHeight:'1.5', fontSize: '16px' }}
      />
    </div>
  );
};

export default SolutionDescription;

import React, { useState } from 'react';
import axios from 'axios';

const JobMatch = () => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const response = await axios.post('/match', { description });
    setResult(response.data);
  };

  return (
    <div>
      <h2>Job Matcher</h2>
      <textarea onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Match Job</button>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
};

export default JobMatch;
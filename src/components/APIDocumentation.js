import React, { useEffect, useState } from 'react';

const APIDocumentation = ({ apiKey }) => {
  const [apiSpecs, setApiSpecs] = useState(null);

  const fetchAPIData = async () => {
    try {
      const response = await fetch('/data/api-specs.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiSpecs(data[apiKey]); // Use apiKey to get the specific API data
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, [apiKey]);

  if (!apiSpecs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p><strong>API:</strong> {apiSpecs.api}</p>
      {/* <p><strong>Endpoint:</strong> {apiSpecs.endpoint}</p> */}
      <p><strong>Description:</strong> {apiSpecs.description}</p>

      {/* <h3>Request</h3>
      <pre>{JSON.stringify(apiSpecs.request, null, 2)}</pre> */}

      <h3>Response</h3>
      <pre>{JSON.stringify(apiSpecs.response, null, 2)}</pre>
    </div>
  );
};

export default APIDocumentation;

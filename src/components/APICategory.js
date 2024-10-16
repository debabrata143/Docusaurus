import React, { useState, useEffect } from 'react';


const APICategory = () => {
  const [apiData, setApiData] = useState(null);

  // Fetch the JSON file when the component mounts
  useEffect(() => {
    fetch('/data/apiData.json')
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error('Error fetching API data:', error));
  }, []);

  if (!apiData) {
    return <div>Loading API data...</div>;
  }

  return (
    <div>
      <h2>Authentication API</h2>
      {apiData.authenticationApi.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p><strong>Endpoint:</strong> {endpoint.endpoint}</p>
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <pre>{JSON.stringify(endpoint.requestBody, null, 2)}</pre>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
            </>
          )}
        </div>
      ))}

      <h2>User Management</h2>
      {apiData.userManagement.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p><strong>Endpoint:</strong> {endpoint.endpoint}</p>
          {endpoint.description && <p><strong>Description:</strong> {endpoint.description}</p>}
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <pre>{JSON.stringify(endpoint.requestBody, null, 2)}</pre>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
            </>
          )}
        </div>
      ))}

      <h2>Product Management</h2>
      {apiData.productManagement.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p><strong>Endpoint:</strong> {endpoint.endpoint}</p>
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <pre>{JSON.stringify(endpoint.requestBody, null, 2)}</pre>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default APICategory;
import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const APICategory = () => {
  const [apiData, setApiData] = useState(null);

  // Define styles object
  const styles = {
    copyButton: {
      padding: '5px 10px',
      backgroundColor: 'rgb(248 249 250);',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      marginLeft: '15px', // Margin to separate from text
      cursor: 'pointer',
    },
    requestBody: {
      backgroundColor: 'rgb(248, 249, 250)', // Light background color
      padding: '10px',
      borderRadius: '4px',
      overflowX: 'auto',
      display: 'flex', // Use flexbox to align items
      justifyContent: 'space-between', // Space between items
      alignItems: 'center', // Align items vertically
    },
    codeContainer: {
      flexGrow: 1, // Make the code container take up available space
      marginRight: '10px', // Margin to separate from the button
    },
  };

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
      {/* <h2>Product catalog APIs</h2> */}
      {apiData.authenticationApi.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p>
            <strong>Endpoint:</strong> <code>{endpoint.endpoint}</code>
            <span>
              <CopyToClipboard text={endpoint.endpoint}>
                <button style={styles.copyButton}>Copy</button>
              </CopyToClipboard>
            </span>
          </p>
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.requestBody, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.requestBody, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.response, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.response, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
        </div>
      ))}

      {/* <h2>User Management</h2>
      {apiData.userManagement.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p><strong>Endpoint:</strong> <code>{endpoint.endpoint}</code></p>
          {endpoint.description && <p><strong>Description:</strong> {endpoint.description}</p>}
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.requestBody, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.requestBody, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.response, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.response, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
        </div>
      ))}

      <h2>Product Management</h2>
      {apiData.productManagement.endpoints.map((endpoint, index) => (
        <div key={index}>
          <h3>{endpoint.name}</h3>
          <p><strong>Endpoint:</strong> <code>{endpoint.endpoint}</code></p>
          {endpoint.requestBody && (
            <>
              <p><strong>Request Body:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.requestBody, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.requestBody, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
          {endpoint.response && (
            <>
              <p><strong>Response:</strong></p>
              <div style={styles.requestBody}>
                <div style={styles.codeContainer}>
                  <SyntaxHighlighter language="json" style={solarizedlight}>
                    {JSON.stringify(endpoint.response, null, 2)}
                  </SyntaxHighlighter>
                </div>
                <CopyToClipboard text={JSON.stringify(endpoint.response, null, 2)}>
                  <button style={styles.copyButton}>Copy</button>
                </CopyToClipboard>
              </div>
            </>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default APICategory;

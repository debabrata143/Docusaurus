import React, { useState, useEffect } from 'react';

const RightPane: React.FC = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectedJson, setSelectedJson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch('/data/BrowseOfferingsPayload.json'); // Adjust the path based on your setup
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        setError(error.message);
        console.error('Failed to fetch JSON data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJsonData();
  }, []);

  const handleJsonSelection = (type) => {
    if (jsonData && jsonData[type]) {
      setSelectedJson(jsonData[type]);
    } else {
      setSelectedJson(null); // Clear selection if the type doesn't exist
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Baseline Example</h3>
      <ul>
        {jsonData &&
          Object.keys(jsonData).map((type) => (
            <li key={type}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleJsonSelection(type); }}>
                {jsonData[type].title}
              </a>
            </li>
          ))}
      </ul>

      {selectedJson && (
        <div>
          <h4>Selected JSON:</h4>
          <pre>{JSON.stringify(selectedJson, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RightPane;




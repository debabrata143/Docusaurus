import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';  // Import js-yaml for YAML parsing
import '../css/custom.css'; 

const PayloadExamples = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectedJson, setSelectedJson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchYamlData = async () => {
      try {
        const response = await fetch('/data/BrowseOfferingsPayload.yml');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const textData = await response.text();
        const parsedData = yaml.load(textData); // Parse YAML into JSON
        setJsonData(parsedData);
      } catch (error) {
        setError(error.message);
        console.error('Failed to fetch or parse YAML data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchYamlData();
  }, []);

  const handleJsonSelection = (type) => {
    if (jsonData && jsonData[type]) {
      setSelectedJson(jsonData[type]);
    } else {
      setSelectedJson(null);
    }
  };

  const filteredTypes = jsonData
    ? Object.keys(jsonData).filter((type) =>
        jsonData[type]?.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Payload</h3>
      <input
        type="text"
        placeholder="Search payload types..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar" // Apply search bar styling
      />
      <ul className="payload-list"> {/* Apply list styling */}
        {filteredTypes.map((type) => (
          <li key={type}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleJsonSelection(type); }}>
              {jsonData[type].title}
            </a>
          </li>
        ))}
      </ul>

      {selectedJson && (
        <div className="selected-json"> {/* Apply selected JSON styling */}
          <h4>Selected JSON:</h4>
          <pre>{JSON.stringify(selectedJson, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PayloadExamples;

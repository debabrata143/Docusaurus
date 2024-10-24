import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';  // Import js-yaml for YAML parsing and formatting
import '../css/custom.css'; 

const PayloadExamples = () => {
  const [yamlData, setYamlData] = useState(null);   // Store parsed YAML data
  const [selectedYaml, setSelectedYaml] = useState(null);   // Selected YAML block
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
        const parsedData = yaml.load(textData);  // Parse YAML data
        setYamlData(parsedData);
      } catch (error) {
        setError(error.message);
        console.error('Failed to fetch or parse YAML data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchYamlData();
  }, []);

  const handleYamlSelection = (type) => {
    if (yamlData && yamlData[type]) {
      setSelectedYaml(yamlData[type]);
    } else {
      setSelectedYaml(null);
    }
  };

  const filteredTypes = yamlData
    ? Object.keys(yamlData).filter((type) =>
        yamlData[type]?.title.toLowerCase().includes(searchQuery.toLowerCase())
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
      <h3>Payload in YAML Format</h3>
      <input
        type="text"
        placeholder="Search payload types..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <ul className="payload-list">
        {filteredTypes.map((type) => (
          <li key={type}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleYamlSelection(type); }}>
              {yamlData[type].title}
            </a>
          </li>
        ))}
      </ul>

      {selectedYaml && (
        <div className="selected-yaml">  {/* Display the selected YAML */}
          <h4>Selected Payload (YAML):</h4>
          <pre>
            <code>{yaml.dump(selectedYaml)}</code> {/* Convert object back to YAML */}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PayloadExamples;

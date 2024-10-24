import React from 'react';
import yaml from 'js-yaml';  // Import the js-yaml package to handle YAML parsing
import apiSpecs from './../../static/data/BrowseOfferingsPayload.yml';  // Import YAML data
import '../css/custom.css'; 

const ApiSpecs = () => {
  const renderYamlSection = (title, request, response) => (
    <div className="api-spec-section">
      <h4>{title} - API Request</h4>
      <pre>
        <code>{yaml.dump(request)}</code> {/* Display the YAML format */}
      </pre>
      <h4>{title} - API Response</h4>
      <pre>
        <code>{yaml.dump(response)}</code> {/* Display the YAML format */}
      </pre>
    </div>
  );

  return (
    <div className="api-specs">
      <h3>API Specifications</h3>

      {apiSpecs.deviceOffering && renderYamlSection('Device Product Offering', apiSpecs.deviceOffering.request, apiSpecs.deviceOffering.response)}
      
      {apiSpecs.tariffOffering && renderYamlSection('Tariff Product Offering', apiSpecs.tariffOffering.request, apiSpecs.tariffOffering.response)}
      
      {apiSpecs.addonSelection && renderYamlSection('Addon Selection', apiSpecs.addonSelection.request, apiSpecs.addonSelection.response)}
    </div>
  );
};

export default ApiSpecs;

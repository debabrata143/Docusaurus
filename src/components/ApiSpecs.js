import React from 'react';
// Import the YAML file instead of the JSON file
import apiSpecs from './../../static/data/BrowseOfferingsPayload.yml';
import '../css/custom.css'; 

const ApiSpecs = () => {
  const renderApiSection = (title, request, response) => (
    <div className="api-spec-section">
      <h4>{title} - API Request</h4>
      <pre>
        <code>{JSON.stringify(request, null, 2)}</code>
      </pre>
      <h4>{title} - API Response</h4>
      <pre>
        <code>{JSON.stringify(response, null, 2)}</code>
      </pre>
    </div>
  );

  return (
    <div className="api-specs">
      <h3>API Specifications</h3>

      {apiSpecs.deviceOffering && renderApiSection('Device Product Offering', apiSpecs.deviceOffering.request, apiSpecs.deviceOffering.response)}
      
      {apiSpecs.tariffOffering && renderApiSection('Tariff Product Offering', apiSpecs.tariffOffering.request, apiSpecs.tariffOffering.response)}
      
      {apiSpecs.addonSelection && renderApiSection('Addon Selection', apiSpecs.addonSelection.request, apiSpecs.addonSelection.response)}
    </div>
  );
};

export default ApiSpecs;

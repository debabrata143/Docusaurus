import React from 'react';

// Define the component as a functional component with no props
const RightPane: React.FC = () => {
  return (
    <div className="right-pane">
      <h3>Baseline Example</h3>
      <p>Details about the baseline example offering.</p>

      <h3>Device Offering</h3>
      <p>Details about the device offering.</p>

      <h3>Tariff Offering</h3>
      <p>Details about the tariff offering.</p>

      <h3>Add-On Offering</h3>
      <p>Details about add-on offerings.</p>
    </div>
  );
};

export default RightPane;

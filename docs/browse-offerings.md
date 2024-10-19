---
id: browse-offerings
title: Browse Offerings
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RightPane from '../src/components/RightPane'; 
import SolutionDescription from '../src/components/SolutionDescription';
import PayloadExamples from '../src/components/PayloadExamples';
import ApiSpecs from '../src/components/ApiSpecs';

<div className="container">
  <div className="tabs-pane">
    <Tabs>
      <TabItem value="description" label="Solution Description" default>
        <h3>Solution Description</h3>
        <SolutionDescription 
          initialText={`To display the tariff options, the Backend For Frontend (BFF) will invoke the API endpoint GET '/productOfferings' with the parameter Group set to 'Tariff'. The backend will return the relevant product offerings associated with the tariff.`} 
        />
      </TabItem>

      <TabItem value="api" label="API Specs - YAML">
        <ApiSpecs /> 
      </TabItem>

      <TabItem value="payload" label="Payload - JSON">
        <PayloadExamples />  
      </TabItem>

      <TabItem value="plantuml" label="Plant UML">
        <h3>Plant UML Diagrams</h3>
        <p>Diagrams illustrating the system architecture and interactions will be displayed here.</p>
        <!-- Add your Plant UML diagram component or code here -->
        ![Docs Version Dropdown](./img/docsVersionDropdown.png)
      </TabItem>
    </Tabs>
  </div>
</div>
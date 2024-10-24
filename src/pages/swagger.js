import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUIYaml from '../components/SwaggerUIYaml';

const SwaggerPage = () => (
  <Layout title="API Documentation">
    <div style={{ margin: '20px' }}>
      <h1>API Documentation</h1>
      <SwaggerUIYaml />
    </div>
  </Layout>
);

export default SwaggerPage;

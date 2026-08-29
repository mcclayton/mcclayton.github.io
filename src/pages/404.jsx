import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import Spinner from '../components/Spinner';

const NotFoundPage = () => (
  <Layout>
    <Spinner>
      <p style={{ fontSize: '20px' }}>
        {'The page you tried to access was not found. '}
      </p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">{'Go Back Home'}</Link>
      </div>
    </Spinner>
  </Layout>
);

export default NotFoundPage;

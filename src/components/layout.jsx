import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { PARTY_HORSE } from '../constants';

import '../styles/global.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const content =
    location && location.pathname === '/' ? (
      <div>{children}</div>
    ) : (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );

  React.useEffect(() => {
    console.log(PARTY_HORSE);
  }, []);

  return content;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

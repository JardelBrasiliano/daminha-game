import React from 'react';
import PropTypes from 'prop-types';

import DamasProvider from './damas';

function ContextProvider({ children }) {
  return <DamasProvider>{children}</DamasProvider>;
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

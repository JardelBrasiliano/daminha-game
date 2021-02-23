import React from 'react';
import PropTypes from 'prop-types';

import DamasProvider from './damas';

import SuperDamasProvider from './superDama';

function ContextProvider({ children }) {
  return (
    <DamasProvider>
      <SuperDamasProvider>{children}</SuperDamasProvider>
    </DamasProvider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

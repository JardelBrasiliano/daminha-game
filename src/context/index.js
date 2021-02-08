import React from 'react';
import PropTypes from 'prop-types';

import MovDamasBrancasProvider from './MovDamasBrancas';
import MovDamasPretasProvider from './MovDamasPretas';

function ContextProvider({ children }) {
  return (
    <MovDamasPretasProvider>
      <MovDamasBrancasProvider>{children}</MovDamasBrancasProvider>
    </MovDamasPretasProvider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

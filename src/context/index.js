import React from 'react';
import PropTypes from 'prop-types';

import MovDamasBrancasProvider from './MovDamasBrancas';
import MovDamasPretasProvider from './MovDamasPretas';
import ProximosMovimentosProvider from './ProximoMovimentos';

function ContextProvider({ children }) {
  return (
    <ProximosMovimentosProvider>
      <MovDamasPretasProvider>
        <MovDamasBrancasProvider>{children}</MovDamasBrancasProvider>
      </MovDamasPretasProvider>
    </ProximosMovimentosProvider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

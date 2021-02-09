import React from 'react';
import PropTypes from 'prop-types';

import MovDamasBrancasProvider from './MovDamasBrancas';
import MovDamasPretasProvider from './MovDamasPretas';
import ProximosMovimentosProvider from './ProximoMovimentos';
import DamaClicadoProvider from './DamaClicado';

function ContextProvider({ children }) {
  return (
    <DamaClicadoProvider>
      <ProximosMovimentosProvider>
        <MovDamasPretasProvider>
          <MovDamasBrancasProvider>{children}</MovDamasBrancasProvider>
        </MovDamasPretasProvider>
      </ProximosMovimentosProvider>
    </DamaClicadoProvider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

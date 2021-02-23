import React from 'react';
import PropTypes from 'prop-types';

import MovDamasBrancasProvider from './MovDamasBrancas';
import MovDamasPretasProvider from './MovDamasPretas';
import ProximosMovimentosProvider from './ProximoMovimentos';
import DamaClicadoProvider from './DamaClicado';

import MovimentosDasDamasProvider from './MovimentosDasDamas';

function ContextProvider({ children }) {
  return (
    <MovimentosDasDamasProvider>
      <DamaClicadoProvider>
        <ProximosMovimentosProvider>
          <MovDamasPretasProvider>
            <MovDamasBrancasProvider>{children}</MovDamasBrancasProvider>
          </MovDamasPretasProvider>
        </ProximosMovimentosProvider>
      </DamaClicadoProvider>
    </MovimentosDasDamasProvider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.objectOf,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;

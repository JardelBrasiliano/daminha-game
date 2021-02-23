import React from 'react';
import PropTypes from 'prop-types';

import ProximosMovimentosProvider from './damas/ProximoMovimentosDasDamas';

import MovimentosDasDamasProvider from './damas/MovimentosDasDamas';

function ContextProvider({ children }) {
  return (
    <MovimentosDasDamasProvider>
      <ProximosMovimentosProvider>{children}</ProximosMovimentosProvider>
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

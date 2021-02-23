import React from 'react';
import PropTypes from 'prop-types';

import ProximosMovimentosProvider from './ProximoMovimentosDasDamas';

import MovimentosDasDamasProvider from './MovimentosDasDamas';

function DamasProvider({ children }) {
  return (
    <ProximosMovimentosProvider>
      <MovimentosDasDamasProvider>{children}</MovimentosDasDamasProvider>
    </ProximosMovimentosProvider>
  );
}

DamasProvider.propTypes = {
  children: PropTypes.objectOf,
};

DamasProvider.defaultProps = {
  children: {},
};

export default DamasProvider;

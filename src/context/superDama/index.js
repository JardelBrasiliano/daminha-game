import React from 'react';
import PropTypes from 'prop-types';

import ProximosMovimentosDasDamasProvider from './ProximosMovimentosDasDamas';

import MovimentosDasSuperDamaProvider from './MovimentosDasSuperDama';

function SuperDamasProvider({ children }) {
  return (
    <ProximosMovimentosDasDamasProvider>
      <MovimentosDasSuperDamaProvider>
        {children}
      </MovimentosDasSuperDamaProvider>
    </ProximosMovimentosDasDamasProvider>
  );
}

SuperDamasProvider.propTypes = {
  children: PropTypes.objectOf,
};

SuperDamasProvider.defaultProps = {
  children: {},
};

export default SuperDamasProvider;

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProximosMovimentosDasSuperDamaContext = createContext();

export default function ProximosMovimentosProvider({ children }) {
  const [
    proximosMovimentosDasSuperDama,
    setProximosMovimentosDasSuperDama,
  ] = useState([]);

  return (
    <ProximosMovimentosDasSuperDamaContext.Provider
      value={{
        proximosMovimentosDasSuperDama,
        setProximosMovimentosDasSuperDama,
      }}
    >
      {children}
    </ProximosMovimentosDasSuperDamaContext.Provider>
  );
}

export function useProximosMovimentos() {
  const context = useContext(ProximosMovimentosDasSuperDamaContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const {
    proximosMovimentosDasSuperDama,
    setProximosMovimentosDasSuperDama,
  } = context;
  return { proximosMovimentosDasSuperDama, setProximosMovimentosDasSuperDama };
}

ProximosMovimentosProvider.propTypes = {
  children: PropTypes.objectOf,
};

ProximosMovimentosProvider.defaultProps = {
  children: {},
};

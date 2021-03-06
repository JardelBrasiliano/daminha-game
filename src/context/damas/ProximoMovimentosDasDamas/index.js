import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProximosMovimentosContext = createContext();

export default function ProximosMovimentosProvider({ children }) {
  const [proximosMovimentos, setProximosMovimentos] = useState([]);

  return (
    <ProximosMovimentosContext.Provider
      value={{
        proximosMovimentos,
        setProximosMovimentos,
      }}
    >
      {children}
    </ProximosMovimentosContext.Provider>
  );
}

export function useProximosMovimentos() {
  const context = useContext(ProximosMovimentosContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { proximosMovimentos, setProximosMovimentos } = context;
  return { proximosMovimentos, setProximosMovimentos };
}

export function useLimparProximosMovimentos() {
  const context = useContext(ProximosMovimentosContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { setProximosMovimentos } = context;
  setProximosMovimentos([]);
}

ProximosMovimentosProvider.propTypes = {
  children: PropTypes.objectOf,
};

ProximosMovimentosProvider.defaultProps = {
  children: {},
};

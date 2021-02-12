import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasBrancasContext = createContext();

export default function MovDamasBrancasProvider({ children }) {
  const [movimentosBrancas, setMovimentosBrancas] = useState([
    'BA1',
    'BC1',
    'BE1',
    'BG1',
    'BB2',
    'BD2',
    'BF2',
    'BH2',
    'BA3',
    'BC3',
    'BE3',
    'BG3',
  ]);

  return (
    <MovDamasBrancasContext.Provider
      value={{
        movimentosBrancas,
        setMovimentosBrancas,
      }}
    >
      {children}
    </MovDamasBrancasContext.Provider>
  );
}

export function useMovDamasBrancas() {
  const context = useContext(MovDamasBrancasContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { movimentosBrancas, setMovimentosBrancas } = context;
  return { movimentosBrancas, setMovimentosBrancas };
}

MovDamasBrancasProvider.propTypes = {
  children: PropTypes.objectOf,
};

MovDamasBrancasProvider.defaultProps = {
  children: {},
};

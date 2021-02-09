import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasBrancasContext = createContext();

export default function MovDamasBrancasProvider({ children }) {
  const [movimentosBrancas, setMovimentosBrancas] = useState([
    'A1',
    'C1',
    'E1',
    'G1',
    'B2',
    'D2',
    'F2',
    'H2',
    'A3',
    'C3',
    'E3',
    'G3',
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

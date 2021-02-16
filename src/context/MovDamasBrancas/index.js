import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasBrancasContext = createContext();

export default function MovDamasBrancasProvider({ children }) {
  const [movimentosBrancas, setMovimentosBrancas] = useState([
    ['BA1', 1],
    ['BC1', -1],
    ['BE1', -1],
    ['BG1', -1],
    ['BB2', -1],
    ['BD2', -1],
    ['BF2', -1],
    ['BH2', -1],
    ['BA3', -1],
    ['BC3', -1],
    ['BE3', -1],
    ['BG3', -1],
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

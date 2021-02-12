import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasPretasContext = createContext();

export default function MovDamasPretasProvider({ children }) {
  const [movimentosPretas, setMovimentosPretas] = useState([
    'PB8',
    'PD8',
    'PF8',
    'PH8',
    'PA7',
    'PC7',
    'PE7',
    'PG7',
    'PB6',
    'PD6',
    'PF6',
    'PH6',
  ]);

  return (
    <MovDamasPretasContext.Provider
      value={{
        movimentosPretas,
        setMovimentosPretas,
      }}
    >
      {children}
    </MovDamasPretasContext.Provider>
  );
}

export function useMovDamasPretas() {
  const context = useContext(MovDamasPretasContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { movimentosPretas, setMovimentosPretas } = context;
  return { movimentosPretas, setMovimentosPretas };
}

MovDamasPretasProvider.propTypes = {
  children: PropTypes.objectOf,
};

MovDamasPretasProvider.defaultProps = {
  children: {},
};

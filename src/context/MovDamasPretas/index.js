import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasPretasContext = createContext();

export default function MovDamasPretasProvider({ children }) {
  const [movimentosPretas, setMovimentosPretas] = useState([
    ['PB8', -1],
    ['PD8', -1],
    ['PF8', -1],
    ['PH8', -1],
    ['PA7', -1],
    ['PC7', -1],
    ['PE7', -1],
    ['PG7', -1],
    ['PB6', -1],
    ['PD6', -1],
    ['PF6', -1],
    ['PH6', -1],
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

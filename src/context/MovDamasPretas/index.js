import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovDamasPretasContext = createContext();

export default function MovDamasPretasProvider({ children }) {
  const [movimentosPretas, setMovimentosPretas] = useState([
    'B8',
    'D8',
    'F8',
    'H8',
    'A7',
    'C7',
    'E7',
    'G7',
    'B6',
    'D6',
    'F6',
    'H6',
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

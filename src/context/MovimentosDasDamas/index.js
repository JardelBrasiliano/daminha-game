import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovimentosDasDamasContext = createContext();

const MOVIMENTO_INICIAL = [
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
  'PF4',
];

export default function MovimentosDasDamasProvider({ children }) {
  const [MovimentosDasDamas, setMovimentosDasDamas] = useState(
    MOVIMENTO_INICIAL,
  );

  return (
    <MovimentosDasDamasContext.Provider
      value={{
        MovimentosDasDamas,
        setMovimentosDasDamas,
      }}
    >
      {children}
    </MovimentosDasDamasContext.Provider>
  );
}

export function useMovimentosDasDamas() {
  const context = useContext(MovimentosDasDamasContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { MovimentosDasDamas, setMovimentosDasDamas } = context;
  return { MovimentosDasDamas, setMovimentosDasDamas };
}

export function useLimparMovimentosDasDamas() {
  const context = useContext(MovimentosDasDamasContext);
  const { setMovimentosDasDamas } = context;
  setMovimentosDasDamas(MOVIMENTO_INICIAL);
}

MovimentosDasDamasProvider.propTypes = {
  children: PropTypes.objectOf,
};

MovimentosDasDamasProvider.defaultProps = {
  children: {},
};

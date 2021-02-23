import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MovimentosDasSuperDamaContext = createContext();

export default function MovimentosDasDamasProvider({ children }) {
  const [MovimentosDasSuperDama, setMovimentosDasSuperDama] = useState([]);

  return (
    <MovimentosDasSuperDamaContext.Provider
      value={{
        MovimentosDasSuperDama,
        setMovimentosDasSuperDama,
      }}
    >
      {children}
    </MovimentosDasSuperDamaContext.Provider>
  );
}

export function useMovimentosDasSuperDama() {
  const context = useContext(MovimentosDasSuperDamaContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { MovimentosDasSuperDama, setMovimentosDasSuperDama } = context;
  return { MovimentosDasSuperDama, setMovimentosDasSuperDama };
}

MovimentosDasDamasProvider.propTypes = {
  children: PropTypes.objectOf,
};

MovimentosDasDamasProvider.defaultProps = {
  children: {},
};

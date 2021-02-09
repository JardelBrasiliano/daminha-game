import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DamaClicadoContext = createContext();

export default function DamaClicadoProvider({ children }) {
  const [damaClicado, setDamaClicado] = useState({
    dama: '',
    clicado: false,
  });

  return (
    <DamaClicadoContext.Provider
      value={{
        damaClicado,
        setDamaClicado,
      }}
    >
      {children}
    </DamaClicadoContext.Provider>
  );
}

export function useDamaClicado() {
  const context = useContext(DamaClicadoContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const { damaClicado, setDamaClicado } = context;
  return { damaClicado, setDamaClicado };
}

DamaClicadoProvider.propTypes = {
  children: PropTypes.objectOf,
};

DamaClicadoProvider.defaultProps = {
  children: {},
};

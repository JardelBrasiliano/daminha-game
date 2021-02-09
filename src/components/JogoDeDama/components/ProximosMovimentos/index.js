import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { convertendoCoordenadas } from '../../posicoesDoTabuleiro';

import './styles.css';

function ProximosMovimentos({ posicao }) {
  const [damaLeft, setDamaLeft] = useState('');
  const [damaBottom, setDamaBottom] = useState('');

  useEffect(() => {
    const { novaCoordDamaLeft, novaCoordDamaBottom } = convertendoCoordenadas(
      posicao,
    );
    setDamaLeft(novaCoordDamaLeft);
    setDamaBottom(novaCoordDamaBottom);
  }, [posicao]);

  return (
    <bottom
      id={posicao}
      className="proximosMovimentos-container"
      style={{ left: `${damaLeft}`, bottom: `${damaBottom}` }}
    >
      PROX
    </bottom>
  );
}

ProximosMovimentos.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default ProximosMovimentos;

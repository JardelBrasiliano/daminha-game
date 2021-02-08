import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { convertendoCoordenadas } from '../../posicoesDoTabuleiro';

import './styles.css';

function DamaBranca({ posicao }) {
  const [damaLeft, setDamaLeft] = useState('');
  const [damaBottom, setDamaBottom] = useState('');

  useEffect(() => {
    const { novaCoordDamaLeft, novaCoordDamaBottom } = convertendoCoordenadas(
      posicao,
    );
    setDamaLeft(novaCoordDamaLeft);
    setDamaBottom(novaCoordDamaBottom);
  }, []);

  return (
    <div
      className="dama-container"
      style={{ left: `${damaLeft}`, bottom: `${damaBottom}` }}
    >
      DAMA
    </div>
  );
}

DamaBranca.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default DamaBranca;

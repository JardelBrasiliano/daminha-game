import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { convertendoCoordenadas } from '../../posicoesDoTabuleiro';

import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';

import proximaCoord from './dama';

import './styles.css';

function DamaBranca({ posicao }) {
  const [damaLeft, setDamaLeft] = useState('');
  const [damaBottom, setDamaBottom] = useState('');
  const { movimentosBrancas } = useMovDamasBrancas();
  const { setProximosMovimentos } = useProximosMovimentos();

  useEffect(() => {
    const { novaCoordDamaLeft, novaCoordDamaBottom } = convertendoCoordenadas(
      posicao,
    );
    setDamaLeft(novaCoordDamaLeft);
    setDamaBottom(novaCoordDamaBottom);
  }, [movimentosBrancas]);

  function calcularJogada() {
    const {
      movimentoFrenteDireita,
      movimentoFrenteEsquerdo,
      movimentoVoltandoDireita,
      movimentoVoltandoEsquerdo,
    } = proximaCoord(posicao, movimentosBrancas);

    setProximosMovimentos([
      movimentoFrenteDireita,
      movimentoFrenteEsquerdo,
      movimentoVoltandoDireita,
      movimentoVoltandoEsquerdo,
    ]);
  }

  return (
    <bottom
      onClick={calcularJogada}
      id={posicao}
      className="dama-container"
      style={{ left: `${damaLeft}`, bottom: `${damaBottom}` }}
    >
      DAMA
    </bottom>
  );
}

DamaBranca.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default DamaBranca;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { convertendoCoordenadas } from '../../posicoesDoTabuleiro';

import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
import { useDamaClicado } from '../../../../context/DamaClicado';

import proximaCoord from './dama';

import './styles.css';

function DamaBranca({ posicao }) {
  const [damaLeft, setDamaLeft] = useState('');
  const [damaBottom, setDamaBottom] = useState('');
  const { movimentosBrancas } = useMovDamasBrancas();
  const { setProximosMovimentos } = useProximosMovimentos();
  const { damaClicado, setDamaClicado } = useDamaClicado();

  useEffect(() => {
    const { novaCoordDamaLeft, novaCoordDamaBottom } = convertendoCoordenadas(
      posicao,
    );
    setDamaLeft(novaCoordDamaLeft);
    setDamaBottom(novaCoordDamaBottom);
  }, [movimentosBrancas]);

  function calcularJogada(dama) {
    const damaIdAtual = damaClicado.nome ? damaClicado.nome.id : '';
    // eslint-disable-next-line
    dama.style.backgroundColor = 'yellow';

    if (damaClicado.clicado && damaIdAtual === dama.id) {
      setProximosMovimentos([-1, -1, -1, -1]);

      setDamaClicado({
        nome: '',
        clicado: false,
      });
      // eslint-disable-next-line
      dama.style.backgroundColor = '';
    } else {
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
      setDamaClicado({
        nome: dama,
        clicado: true,
      });
      if (damaClicado.nome) {
        damaClicado.nome.style.backgroundColor = '';
      }
    }
  }

  return (
    <bottom
      onClick={(dama) => calcularJogada(dama.target)}
      id={posicao}
      className="dama-container"
      style={{
        left: `${damaLeft}`,
        bottom: `${damaBottom}`,
      }}
    >
      DAMA
    </bottom>
  );
}

DamaBranca.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default DamaBranca;

import React from 'react';
import PropTypes from 'prop-types';

import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useMovDamasPretas } from '../../../../context/MovDamasPretas';
import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
import { useDamaClicado } from '../../../../context/DamaClicado';

import damaBranca from '../../../../assets/damaBranca.png';
import damaPreta from '../../../../assets/damaPreta.png';

import ClasseDama from '../../classes/dama';
import SuperDama from '../../classes/superDama';

import './styles.css';

function DamaBranca({ posicao, superDama }) {
  const newDama = superDama === -1 ? new ClasseDama() : new SuperDama();
  newDama.posicao = posicao;

  const damaCor = newDama.cor === 'B' ? damaBranca : damaPreta;

  const { movimentosBrancas } = useMovDamasBrancas();
  const { movimentosPretas } = useMovDamasPretas();
  const { setProximosMovimentos } = useProximosMovimentos();
  const { damaClicado, setDamaClicado } = useDamaClicado();

  function calcularJogada(dama) {
    const damaIdAtual = damaClicado.nome ? damaClicado.nome.id : '';
    // eslint-disable-next-line
    dama.style.backgroundColor = 'blue';

    if (damaClicado.clicado && damaIdAtual === dama.id) {
      setProximosMovimentos([-1, -1, -1, -1]);

      setDamaClicado({
        nome: '',
        clicado: false,
      });
      // eslint-disable-next-line
      dama.style.backgroundColor = 'transparent';
    } else {
      const [
        movimentoFrenteDireita,
        movimentoFrenteEsquerdo,
        movimentoVoltandoDireita,
        movimentoVoltandoEsquerdo,
      ] = newDama.proximaCoord(movimentosBrancas, movimentosPretas);

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
        damaClicado.nome.style.backgroundColor = 'transparent';
      }
    }
  }

  return (
    <bottom
      onClick={(dama) => calcularJogada(dama.target)}
      id={posicao}
      className={`dama-container ${superDama === -1 ? '' : 'superDama'}`}
      style={{
        backgroundImage: `url(${damaCor})`,
        left: `${newDama.posicaoColuna}`,
        bottom: `${newDama.posicaoLinha}`,
      }}
    />
  );
}

DamaBranca.propTypes = {
  posicao: PropTypes.string.isRequired,
  superDama: PropTypes.number.isRequired,
};

export default DamaBranca;

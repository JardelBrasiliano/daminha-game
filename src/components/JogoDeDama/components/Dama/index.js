import React from 'react';
import PropTypes from 'prop-types';

import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useMovDamasPretas } from '../../../../context/MovDamasPretas';
import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
import { useDamaClicado } from '../../../../context/DamaClicado';

import ClasseDama from '../../classes/dama';

import './styles.css';

function DamaBranca({ posicao }) {
  const newDama = new ClasseDama();
  newDama.posicao = posicao;

  const damaCor = newDama.cor === 'B' ? 'red' : 'black';

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
      dama.style.backgroundColor = dama.id[0] === 'B' ? 'red' : 'black';
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
        damaClicado.nome.style.backgroundColor =
          damaClicado.nome.id[0] === 'B' ? 'red' : 'black';
      }
    }
  }

  return (
    <bottom
      onClick={(dama) => calcularJogada(dama.target)}
      id={posicao}
      className="dama-container"
      style={{
        backgroundColor: `${damaCor}`,
        left: `${newDama.posicaoColuna}`,
        bottom: `${newDama.posicaoLinha}`,
      }}
    />
  );
}

DamaBranca.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default DamaBranca;

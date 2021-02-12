import React from 'react';
import PropTypes from 'prop-types';

import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useDamaClicado } from '../../../../context/DamaClicado';

import ClasseDama from '../../classes/dama';

import './styles.css';

function ProximosMovimentos({ posicao }) {
  const newDama = new ClasseDama();
  newDama.posicao = posicao;

  const { damaClicado, setDamaClicado } = useDamaClicado();
  const { movimentosBrancas, setMovimentosBrancas } = useMovDamasBrancas();
  const { setProximosMovimentos } = useProximosMovimentos();

  function movimentandoDama(posicaoProxima) {
    const idDamaClicado = damaClicado.nome.id;

    const novaListaDeMovimento = movimentosBrancas.map((movimento) => {
      if (idDamaClicado === movimento) {
        return posicaoProxima;
      }
      return movimento;
    });
    setProximosMovimentos([-1, -1, -1, -1]);
    setMovimentosBrancas(novaListaDeMovimento);

    // eslint-disable-next-line
    damaClicado.nome.style.backgroundColor = '';
    setDamaClicado({ nome: '', clicado: false });
  }

  return (
    <bottom
      id={posicao}
      onClick={(pos) => movimentandoDama(pos.target.id)}
      className="proximosMovimentos-container"
      style={{
        left: `${newDama.posicaoColuna}`,
        bottom: `${newDama.posicaoLinha}`,
      }}
    >
      PROX
    </bottom>
  );
}

ProximosMovimentos.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default ProximosMovimentos;

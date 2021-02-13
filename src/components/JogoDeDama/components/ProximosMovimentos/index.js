import React from 'react';
import PropTypes from 'prop-types';

import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
import { useMovDamasPretas } from '../../../../context/MovDamasPretas';
import { useDamaClicado } from '../../../../context/DamaClicado';

import ClasseDama from '../../classes/dama';

import './styles.css';

function ProximosMovimentos({ posicao, comerEssa }) {
  const newDama = new ClasseDama();
  newDama.posicao = posicao;

  const damaCor = 'transparent';

  const { damaClicado, setDamaClicado } = useDamaClicado();
  const { movimentosBrancas, setMovimentosBrancas } = useMovDamasBrancas();
  const { movimentosPretas, setMovimentosPretas } = useMovDamasPretas();
  const { setProximosMovimentos } = useProximosMovimentos();

  function excluindoDamaDaLista(list) {
    const novaLista = list.map((itemList) => itemList[0]);

    const cor = comerEssa[0];

    switch (cor) {
      case 'P': {
        const indexDama = novaLista.indexOf(comerEssa);

        list.splice(indexDama, 1);

        setMovimentosPretas(list);
        break;
      }
      case 'B': {
        const indexDama = novaLista.indexOf(comerEssa);

        list.splice(indexDama, 1);

        setMovimentosBrancas(list);
        break;
      }
      default:
        break;
    }
  }

  function movimentandoDama(posicaoProxima) {
    const corClicado = damaClicado.nome.id[0];
    const idDamaClicado = damaClicado.nome.id;

    setProximosMovimentos([-1, -1, -1, -1]);
    if (corClicado === 'B') {
      const novaListaDeMovimento = movimentosBrancas.map((movimento) => {
        if (idDamaClicado === movimento[0]) {
          return [posicaoProxima, movimento[1]];
        }
        return movimento;
      });
      setMovimentosBrancas(novaListaDeMovimento);
      excluindoDamaDaLista(movimentosPretas);
    } else if (corClicado === 'P') {
      const novaListaDeMovimento = movimentosPretas.map((movimento) => {
        if (idDamaClicado === movimento[0]) {
          return [posicaoProxima, movimento[1]];
        }
        return movimento;
      });
      setMovimentosPretas(novaListaDeMovimento);
      excluindoDamaDaLista(movimentosBrancas);
    }

    // eslint-disable-next-line
    damaClicado.nome.style.backgroundColor = damaCor;
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
    />
  );
}

ProximosMovimentos.propTypes = {
  posicao: PropTypes.string.isRequired,
  comerEssa: PropTypes.string.isRequired,
};

export default ProximosMovimentos;

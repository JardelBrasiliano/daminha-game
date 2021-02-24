import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useMovimentosDasDamas } from '../../../../../context/damas/MovimentosDasDamas';
import { useProximosMovimentos } from '../../../../../context/damas/ProximoMovimentosDasDamas';

import './styles.css';

function ProximosMovimentos({ de, para, comer }) {
  const [posicaoLinha, setposicaoLinha] = useState('');
  const [posicaoColuna, setposicaoColuna] = useState('');

  const { MovimentosDasDamas, setMovimentosDasDamas } = useMovimentosDasDamas();
  const { setProximosMovimentos } = useProximosMovimentos();

  const movimentandoDama = () => {
    const indexMinhaMovDama = MovimentosDasDamas.indexOf(de);
    MovimentosDasDamas.splice(indexMinhaMovDama, 1, para);
    if (comer) {
      const indexDamaInimiga = MovimentosDasDamas.indexOf(comer);
      MovimentosDasDamas.splice(indexDamaInimiga, 1);
    }
    const corDama = para[0];
    const linhaDama = para[2];

    switch (corDama) {
      case 'B':
        if (linhaDama === '8') {
          const indexDama = MovimentosDasDamas.indexOf(para);
          MovimentosDasDamas.splice(indexDama, 1);
          MovimentosDasDamas.push(`${para}S`);
          setProximosMovimentos(MovimentosDasDamas);
        } else {
          setMovimentosDasDamas(MovimentosDasDamas);
        }
        break;
      case 'P':
        if (linhaDama === '1') {
          const indexDama = MovimentosDasDamas.indexOf(para);
          MovimentosDasDamas.splice(indexDama, 1);
          MovimentosDasDamas.push(`${para}S`);
          setProximosMovimentos(MovimentosDasDamas);
        } else {
          setMovimentosDasDamas(MovimentosDasDamas);
        }
        break;
      default:
        break;
    }
    setProximosMovimentos([]);
  };

  const converterPosicoesParaPorcentagem = () => {
    const posicaoLeft = {
      a: '0',
      b: '12.5%',
      c: '25%',
      d: '37.5%',
      e: '50%',
      f: '62.5%',
      g: '75%',
      h: '87.5%',
    };
    const posicaoBottom = [
      '0%',
      '12.5%',
      '25%',
      '37.5%',
      '50%',
      '62.5%',
      '75%',
      '87.5%',
    ];
    return [posicaoLeft[para[1].toLowerCase()], posicaoBottom[+para[2] - 1]];
  };

  useEffect(() => {
    const [novaColuna, novaLinha] = converterPosicoesParaPorcentagem();
    setposicaoColuna(novaColuna);
    setposicaoLinha(novaLinha);
  }, [para]);

  return (
    <bottom
      id={para}
      onClick={() => movimentandoDama()}
      className="proximosMovimentos-container"
      style={{
        left: `${posicaoColuna}`,
        bottom: `${posicaoLinha}`,
      }}
    />
  );
}

ProximosMovimentos.propTypes = {
  de: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  comer: PropTypes.string.isRequired,
};

export default ProximosMovimentos;

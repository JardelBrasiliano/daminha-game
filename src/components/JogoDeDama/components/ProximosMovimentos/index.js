import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useProximosMovimentos } from '../../../../context/ProximoMovimentos';
// import { useMovDamasBrancas } from '../../../../context/MovDamasBrancas';
// import { useMovDamasPretas } from '../../../../context/MovDamasPretas';
// import { useDamaClicado } from '../../../../context/DamaClicado';

import { useMovimentosDasDamas } from '../../../../context/MovimentosDasDamas';

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
      // console.log(comer, !!comer);
      const indexDamaInimiga = MovimentosDasDamas.indexOf(comer);
      // console.log(indexDamaInimiga);
      // console.log(MovimentosDasDamas);
      MovimentosDasDamas.splice(indexDamaInimiga, 1);
    }
    setMovimentosDasDamas(MovimentosDasDamas);
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

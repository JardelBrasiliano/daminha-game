import React from 'react';

import Tabuleiro from './Tabuleiro';
import Dama from './Tabuleiro/Dama';
import ProximosMovimentos from './Tabuleiro/Dama/ProximosMovimentos';

import { useMovimentosDasDamas } from '../../context/damas/MovimentosDasDamas';
import { useProximosMovimentos } from '../../context/damas/ProximoMovimentosDasDamas';

function JogoDeDama() {
  const { MovimentosDasDamas } = useMovimentosDasDamas();
  const { proximosMovimentos } = useProximosMovimentos();

  return (
    <Tabuleiro>
      {MovimentosDasDamas.map((posicao) => (
        <Dama posicao={posicao} />
      ))}

      {proximosMovimentos.map((posicao) => (
        <ProximosMovimentos
          de={posicao.de}
          para={posicao.para}
          comer={posicao.comer}
        />
      ))}
    </Tabuleiro>
  );
}

export default JogoDeDama;

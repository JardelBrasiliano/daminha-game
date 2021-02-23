import React from 'react';

import Tabuleiro from './components/Tabuleiro';
import Dama from './components/DamaTeste';
import ProximosMovimentos from './components/ProximosMovimentos';

import { useMovimentosDasDamas } from '../../context/MovimentosDasDamas';
import { useProximosMovimentos } from '../../context/ProximoMovimentos';

import './styles.css';

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

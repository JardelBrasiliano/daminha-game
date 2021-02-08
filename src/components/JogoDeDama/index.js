import React from 'react';

import Tabuleiro from './components/Tabuleiro';
import DamaBranca from './components/Dama';

import { useMovDamasBrancas } from '../../context/MovDamasBrancas';
import './styles.css';

function JogoDeDama() {
  const { movimentos } = useMovDamasBrancas();

  return (
    <Tabuleiro>
      {movimentos.map((posicao, index) => (
        <DamaBranca key={`key-damas-brancas-${index}`} posicao={posicao} />
      ))}
    </Tabuleiro>
  );
}

export default JogoDeDama;

import React, { useEffect, useState } from 'react';

import Tabuleiro from './components/Tabuleiro';
import DamaBranca from './components/DamaBrancas';
import ProximosMovimentos from './components/ProximosMovimentos';

import { useMovDamasBrancas } from '../../context/MovDamasBrancas';
import { useProximosMovimentos } from '../../context/ProximoMovimentos';

import './styles.css';

function JogoDeDama() {
  const [proximoMov, setProximoMov] = useState([]);

  const { movimentosBrancas } = useMovDamasBrancas();
  const { proximosMovimentos } = useProximosMovimentos();

  useEffect(() => {
    const novaListaDeProximos = [];
    proximosMovimentos.forEach((element) => {
      if (element !== -1) {
        novaListaDeProximos.push(element);
      }
    });
    setProximoMov(novaListaDeProximos);
  }, [proximosMovimentos]);

  return (
    <Tabuleiro>
      {movimentosBrancas.map((posicao, index) => (
        <DamaBranca key={`key-damas-brancas-${index}`} posicao={posicao} />
      ))}
      {proximoMov.map((posicao, index) => (
        <ProximosMovimentos
          key={`key-proximos-movimentos-${index}`}
          posicao={posicao}
        />
      ))}
    </Tabuleiro>
  );
}

export default JogoDeDama;

import React, { useEffect, useState } from 'react';

import Tabuleiro from './components/Tabuleiro';
import Dama from './components/Dama';
import ProximosMovimentos from './components/ProximosMovimentos';

import { useMovDamasBrancas } from '../../context/MovDamasBrancas';
import { useMovDamasPretas } from '../../context/MovDamasPretas';
import { useProximosMovimentos } from '../../context/ProximoMovimentos';

import './classes/dama';
import './classes/superDama';

import './styles.css';

function JogoDeDama() {
  const [proximoMov, setProximoMov] = useState([]);

  const { movimentosBrancas } = useMovDamasBrancas();
  const { movimentosPretas } = useMovDamasPretas();
  const { proximosMovimentos } = useProximosMovimentos();

  useEffect(() => {
    console.log(movimentosBrancas.length);
    const novaListaDeProximos = [];
    proximosMovimentos.forEach((element) => {
      if (element !== -1) {
        novaListaDeProximos.push(element);
      }
    });
    setProximoMov(novaListaDeProximos);
  }, [proximosMovimentos]);

  function RenderProximosMovimentos(posicao, index) {
    if (posicao[0] === -1 || posicao[0] === 0) {
      return '';
    }
    return (
      <ProximosMovimentos
        key={`key-proximos-movimentos-${index}`}
        posicao={posicao[0]}
        comerEssa={posicao[1]}
      />
    );
  }

  return (
    <Tabuleiro>
      {movimentosBrancas.map((posicao, index) => (
        <Dama
          key={`key-damas-brancas-${index}`}
          posicao={posicao[0]}
          superDama={posicao[1]}
        />
      ))}

      {movimentosPretas.map((posicao, index) => (
        <Dama
          key={`key-damas-pretas-${index}`}
          posicao={posicao[0]}
          superDama={posicao[1]}
        />
      ))}

      {proximoMov.map(RenderProximosMovimentos)}
    </Tabuleiro>
  );
}

export default JogoDeDama;

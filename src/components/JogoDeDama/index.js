import React, { useEffect, useState } from 'react';

import Tabuleiro from './components/Tabuleiro';
import Dama from './components/Dama';
import ProximosMovimentos from './components/ProximosMovimentos';

import { useMovDamasBrancas } from '../../context/MovDamasBrancas';
import { useMovDamasPretas } from '../../context/MovDamasPretas';
import { useProximosMovimentos } from '../../context/ProximoMovimentos';

import './classes/dama';

import './styles.css';

function JogoDeDama() {
  const [proximoMov, setProximoMov] = useState([]);

  const { movimentosBrancas } = useMovDamasBrancas();
  const { movimentosPretas } = useMovDamasPretas();
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
        <Dama key={`key-damas-brancas-${index}`} posicao={posicao} />
      ))}

      {movimentosPretas.map((posicao, index) => (
        <Dama key={`key-damas-pretas-${index}`} posicao={posicao} />
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

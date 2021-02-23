import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useMovimentosDasDamas } from '../../../../context/damas/MovimentosDasDamas';
import { useProximosMovimentos } from '../../../../context/damas/ProximoMovimentosDasDamas';

import './styles.css';

function Dama({ posicao }) {
  const [posicaoLinha, setposicaoLinha] = useState('');
  const [posicaoColuna, setposicaoColuna] = useState('');

  const { MovimentosDasDamas } = useMovimentosDasDamas();
  const { setProximosMovimentos } = useProximosMovimentos();

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
    return [
      posicaoLeft[posicao[1].toLowerCase()],
      posicaoBottom[+posicao[2] - 1],
    ];
  };

  const validacaoDeDamaNoTabuleiro = (dama) => {
    const colunaELinha = dama[1] + dama[2];

    if (dama.length === 2 || dama[2] >= 9 || dama[2] <= 0) {
      return -1;
    }
    switch (dama[0]) {
      case 'B': {
        const temDamaBranca =
          MovimentosDasDamas[MovimentosDasDamas.indexOf(`B${colunaELinha}`)];
        const temDamaPreta =
          MovimentosDasDamas[MovimentosDasDamas.indexOf(`P${colunaELinha}`)];

        if (temDamaBranca) {
          return -1;
        }
        if (temDamaPreta) {
          return temDamaPreta;
        }
        return 'livre';
      }
      case 'P': {
        const temDamaBranca =
          MovimentosDasDamas[MovimentosDasDamas.indexOf(`B${colunaELinha}`)];
        const temDamaPreta =
          MovimentosDasDamas[MovimentosDasDamas.indexOf(`P${colunaELinha}`)];

        if (temDamaBranca) {
          return temDamaBranca;
        }
        if (temDamaPreta) {
          return -1;
        }
        return 'livre';
      }
      default:
        return 0;
    }
  };

  const calcularJogaParaFrente = (dama) => {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    const possiveisJogadas = [];

    const proximaLinha = +dama[2] + 1;
    const proximaDireita =
      dama[0] + ordem[ordem.indexOf(dama[1]) + 1] + proximaLinha;
    const proximaEsquerda =
      dama[0] + ordem[ordem.indexOf(dama[1]) - 1] + proximaLinha;

    const resValidacaoDireita = validacaoDeDamaNoTabuleiro(proximaDireita);
    const resValidacaoEsquerda = validacaoDeDamaNoTabuleiro(proximaEsquerda);

    if (resValidacaoDireita === 'livre') {
      possiveisJogadas.push({ de: dama, para: proximaDireita, comer: false });
    } else if (resValidacaoDireita !== -1) {
      const comerProximalinha = +proximaDireita[2] + 1;
      const comerProxima =
        dama[0] +
        ordem[ordem.indexOf(proximaDireita[1]) + 1] +
        comerProximalinha;
      const validarComer = validacaoDeDamaNoTabuleiro(comerProxima);

      const corMinhaDama = dama[0];
      const comerEssaDama =
        corMinhaDama === 'B'
          ? proximaDireita.replace(/B/g, 'P')
          : proximaDireita.replace(/P/g, 'B');

      if (validarComer === 'livre') {
        possiveisJogadas.push({
          de: dama,
          para: comerProxima,
          comer: comerEssaDama,
        });
      }
    }

    if (resValidacaoEsquerda === 'livre') {
      possiveisJogadas.push({ de: dama, para: proximaEsquerda, comer: false });
    } else if (resValidacaoEsquerda !== -1) {
      const indexComerProximalinha = +proximaEsquerda[2] + 1;
      const comerProxima =
        dama[0] +
        ordem[ordem.indexOf(proximaEsquerda[1]) - 1] +
        indexComerProximalinha;
      const validarComer = validacaoDeDamaNoTabuleiro(comerProxima);

      const corMinhaDama = dama[0];

      const comerEssaDama =
        corMinhaDama === 'B'
          ? proximaEsquerda.replace(/B/g, 'P')
          : proximaEsquerda.replace(/P/g, 'B');

      if (validarComer === 'livre') {
        possiveisJogadas.push({
          de: dama,
          para: comerProxima,
          comer: comerEssaDama,
        });
      }
    }
    return possiveisJogadas;
  };

  const calcularJogaParaTras = (dama) => {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    const possiveisJogadas = [];

    const proximaLinha = +dama[2] - 1;
    const proximaDireita =
      dama[0] + ordem[ordem.indexOf(dama[1]) + 1] + proximaLinha;
    const proximaEsquerda =
      dama[0] + ordem[ordem.indexOf(dama[1]) - 1] + proximaLinha;

    const resValidacaoDireita = validacaoDeDamaNoTabuleiro(proximaDireita);
    const resValidacaoEsquerda = validacaoDeDamaNoTabuleiro(proximaEsquerda);

    if (resValidacaoDireita === 'livre') {
      possiveisJogadas.push({ de: dama, para: proximaDireita, comer: false });
    } else if (resValidacaoDireita !== -1) {
      const comerProximalinha = +proximaDireita[2] - 1;
      const comerProxima =
        dama[0] +
        ordem[ordem.indexOf(proximaDireita[1]) + 1] +
        comerProximalinha;
      const validarComer = validacaoDeDamaNoTabuleiro(comerProxima);

      const corMinhaDama = dama[0];
      const comerEssaDama =
        corMinhaDama === 'B'
          ? proximaDireita.replace(/B/g, 'P')
          : proximaDireita.replace(/P/g, 'B');

      if (validarComer === 'livre') {
        possiveisJogadas.push({
          de: dama,
          para: comerProxima,
          comer: comerEssaDama,
        });
      }
    }

    if (resValidacaoEsquerda === 'livre') {
      possiveisJogadas.push({ de: dama, para: proximaEsquerda, comer: false });
    } else if (resValidacaoEsquerda !== -1) {
      const comerProximalinha = +proximaEsquerda[2] - 1;
      const comerProxima =
        dama[0] +
        ordem[ordem.indexOf(proximaEsquerda[1]) - 1] +
        comerProximalinha;
      const validarComer = validacaoDeDamaNoTabuleiro(comerProxima);

      const corMinhaDama = dama[0];
      const comerEssaDama =
        corMinhaDama === 'B'
          ? proximaEsquerda.replace(/B/g, 'P')
          : proximaEsquerda.replace(/P/g, 'B');

      if (validarComer === 'livre') {
        possiveisJogadas.push({
          de: dama,
          para: comerProxima,
          comer: comerEssaDama,
        });
      }
    }
    return possiveisJogadas;
  };

  const calcularJogada = (dama) => {
    setProximosMovimentos([]);

    const movimentosParaFrente = calcularJogaParaFrente(dama);
    const movimentosParaTras = calcularJogaParaTras(dama);

    switch (dama[0]) {
      case 'B': {
        movimentosParaTras.forEach((movimento) => {
          if (movimento.comer) {
            movimentosParaFrente.push(movimento);
          }
        });

        setProximosMovimentos(movimentosParaFrente);
        break;
      }
      case 'P': {
        movimentosParaFrente.forEach((movimento) => {
          if (movimento.comer) {
            movimentosParaTras.push(movimento);
          }
        });

        setProximosMovimentos(movimentosParaTras);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const [novaColuna, novaLinha] = converterPosicoesParaPorcentagem();
    setposicaoColuna(novaColuna);
    setposicaoLinha(novaLinha);

    const corDama = posicao[0];
    const linhaDama = posicao[2];

    switch (corDama) {
      case 'B':
        if (linhaDama === '8') {
          console.log('superDama');
        }
        break;
      case 'P':
        if (linhaDama === '1') {
          console.log('superDama');
        }
        break;
      default:
        break;
    }
  }, [posicao]);

  return (
    <bottom
      onClick={(dama) => calcularJogada(dama.target.id)}
      id={posicao}
      className="dama-container"
      style={{
        backgroundColor: `${posicao[0] === 'B' ? 'blue' : 'red'}`,
        left: `${posicaoColuna}`,
        bottom: `${posicaoLinha}`,
      }}
    />
  );
}

Dama.propTypes = {
  posicao: PropTypes.string.isRequired,
};

export default Dama;

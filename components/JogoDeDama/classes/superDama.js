import ClasseDama from './dama';

class SuperDama extends ClasseDama {
  proxEsquerdaEDireita = (listaMovimentosBrancas, listaMovimentosPretas) => {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    const listaEsquerda = [];

    let colunaInicialDireita = ordem.indexOf(this.coluna) + 1;
    let linhaInicialDireita = +this.linha + 1;
    let colunaInicialEsquerda = ordem.indexOf(this.coluna) - 1;
    let linhaInicialEsquerda = +this.linha + 1;

    let controleGeral = true;
    let controleEsquerdo = false;
    let controleDireitro = false;

    while (controleGeral) {
      const direita = ordem[colunaInicialDireita] + linhaInicialDireita;
      const esquerda = ordem[colunaInicialEsquerda] + linhaInicialEsquerda;

      const validandoDiretira = this.posicaoValida(
        direita,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const validandoEsquerda = this.posicaoValida(
        esquerda,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      // DIREITA
      if (validandoDiretira === -1) {
        controleDireitro = true;
      } else if (
        (validandoDiretira[0] === 'P' && this.cor === 'B') ||
        (validandoDiretira[0] === 'B' && this.cor === 'P')
      ) {
        const proximoADireita = this.posicaoValida(
          ordem[colunaInicialDireita + 1] + (linhaInicialDireita + 1),
          listaMovimentosBrancas,
          listaMovimentosPretas,
        );
        if (proximoADireita[0] === this.cor) {
          listaEsquerda.push([proximoADireita, validandoDiretira]);
        }
        controleDireitro = true;
      } else if (
        (validandoDiretira[0] === 'P' && this.cor === 'P') ||
        (validandoDiretira[0] === 'B' && this.cor === 'B')
      ) {
        colunaInicialDireita += 1;
        linhaInicialDireita += 1;
        listaEsquerda.push([this.cor + direita, -1]);
      }

      // ESQUERDA
      if (validandoEsquerda === -1) {
        controleEsquerdo = true;
      } else if (
        (validandoEsquerda[0] === 'P' && this.cor === 'B') ||
        (validandoEsquerda[0] === 'B' && this.cor === 'P')
      ) {
        const proximoAEsquerda = this.posicaoValida(
          ordem[colunaInicialEsquerda - 1] + (linhaInicialEsquerda + 1),
          listaMovimentosBrancas,
          listaMovimentosPretas,
        );
        if (proximoAEsquerda[0] === this.cor) {
          listaEsquerda.push([proximoAEsquerda, validandoEsquerda]);
        }
        controleEsquerdo = true;
      } else if (
        (validandoEsquerda[0] === 'P' && this.cor === 'P') ||
        (validandoEsquerda[0] === 'B' && this.cor === 'B')
      ) {
        colunaInicialEsquerda -= 1;
        linhaInicialEsquerda += 1;
        listaEsquerda.push([this.cor + esquerda, -1]);
      }

      // SAIR DO LOOP
      if (controleDireitro && controleEsquerdo) {
        controleGeral = false;
      }
    }
    return listaEsquerda;
  };

  voltEsquerdaEDireita = (listaMovimentosBrancas, listaMovimentosPretas) => {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    const listaEsquerda = [];

    let colunaInicialDireita = ordem.indexOf(this.coluna) + 1;
    let linhaInicialDireita = +this.linha - 1;

    let colunaInicialEsquerda = ordem.indexOf(this.coluna) - 1;
    let linhaInicialEsquerda = +this.linha - 1;

    let controleGeral = true;
    let controleEsquerdo = false;
    let controleDireitro = false;

    while (controleGeral) {
      const direita = ordem[colunaInicialDireita] + linhaInicialDireita;
      const esquerda = ordem[colunaInicialEsquerda] + linhaInicialEsquerda;

      const validandoDiretira = this.posicaoValida(
        direita,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const validandoEsquerda = this.posicaoValida(
        esquerda,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      // DIREITA
      if (validandoDiretira === -1) {
        controleDireitro = true;
      } else if (
        (validandoDiretira[0] === 'P' && this.cor === 'B') ||
        (validandoDiretira[0] === 'B' && this.cor === 'P')
      ) {
        const proximoADireita = this.posicaoValida(
          ordem[colunaInicialDireita + 1] + (linhaInicialDireita - 1),
          listaMovimentosBrancas,
          listaMovimentosPretas,
        );
        if (proximoADireita[0] === this.cor) {
          listaEsquerda.push([proximoADireita, validandoDiretira]);
        }
        controleDireitro = true;
      } else if (
        (validandoDiretira[0] === 'P' && this.cor === 'P') ||
        (validandoDiretira[0] === 'B' && this.cor === 'B')
      ) {
        colunaInicialDireita += 1;
        linhaInicialDireita -= 1;
        listaEsquerda.push([this.cor + direita, -1]);
      }

      // ESQUERDA
      if (validandoEsquerda === -1) {
        controleEsquerdo = true;
      } else if (
        (validandoEsquerda[0] === 'P' && this.cor === 'B') ||
        (validandoEsquerda[0] === 'B' && this.cor === 'P')
      ) {
        const proximoAEsquerda = this.posicaoValida(
          ordem[colunaInicialEsquerda - 1] + (linhaInicialEsquerda - 1),
          listaMovimentosBrancas,
          listaMovimentosPretas,
        );
        if (proximoAEsquerda[0] === this.cor) {
          listaEsquerda.push([proximoAEsquerda, validandoEsquerda]);
        }
        controleEsquerdo = true;
      } else if (
        (validandoEsquerda[0] === 'P' && this.cor === 'P') ||
        (validandoEsquerda[0] === 'B' && this.cor === 'B')
      ) {
        colunaInicialEsquerda -= 1;
        linhaInicialEsquerda -= 1;
        listaEsquerda.push([this.cor + esquerda, -1]);
      }

      // SAIR DO LOOP
      if (controleDireitro && controleEsquerdo) {
        controleGeral = false;
      }
    }
    return listaEsquerda;
  };

  proximaCoord(listaMovimentosBrancas, listaMovimentosPretas) {
    const listaMovimentosParaFrente = this.proxEsquerdaEDireita(
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );
    const listaMovimentosParaVoltando = this.voltEsquerdaEDireita(
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );

    const listaFinal = listaMovimentosParaFrente.concat(
      listaMovimentosParaVoltando,
    );

    return listaFinal;
  }
}

export default SuperDama;

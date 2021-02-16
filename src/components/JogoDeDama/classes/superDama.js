import ClasseDama from './dama';

class SuperDama extends ClasseDama {
  calcularMovimentoParaFrente(listaMovimentosBrancas, listaMovimentosPretas) {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    const coordYFrenteIndex = +this.linha + 1;
    const coordXDireitaIndex = ordem.indexOf(this.coluna) + 1;
    const coordXEsquerdaIndex = ordem.indexOf(this.coluna) - 1;

    const coordYFrente = coordYFrenteIndex >= 9 ? 0 : coordYFrenteIndex;
    const coordXDireita = coordXDireitaIndex >= 9 ? 0 : coordXDireitaIndex;
    const coordXEsquerda = coordXEsquerdaIndex < 1 ? 0 : coordXEsquerdaIndex;

    const movimentoFrenteEsquerdo = this.posicaoValida(
      ordem[coordXEsquerda] + coordYFrente,
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );
    const movimentoFrenteDireita = this.posicaoValida(
      ordem[coordXDireita] + coordYFrente,
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );

    this.novoMovimentoFrenteParaEsqueda =
      this.cor === 'B' ? [movimentoFrenteEsquerdo, -1] : [-1, -1];
    this.novoMovimentoFrenteParaDireita =
      this.cor === 'B' ? [movimentoFrenteDireita, -1] : [-1, -1];

    if (
      (this.cor === 'B' && movimentoFrenteEsquerdo[0] === 'P') ||
      (this.cor === 'P' && movimentoFrenteEsquerdo[0] === 'B')
    ) {
      const coordYFrenteIndexTeste = +movimentoFrenteEsquerdo[2] + 1;
      const coordXEsquerdaIndexTeste =
        ordem.indexOf(movimentoFrenteEsquerdo[1]) - 1;

      const coordYFrenteTeste =
        coordYFrenteIndexTeste >= 9 ? 0 : coordYFrenteIndexTeste;
      const coordXEsquerdaTeste =
        coordXEsquerdaIndexTeste < 1 ? 0 : coordXEsquerdaIndexTeste;

      const novoMovimentoFrenteParaEsqueda = this.comerDama(
        ordem[coordXEsquerdaTeste] + coordYFrenteTeste,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const comerEssaDama = movimentoFrenteEsquerdo;
      this.novoMovimentoFrenteParaEsqueda = [
        novoMovimentoFrenteParaEsqueda,
        comerEssaDama,
      ];
    }
    if (
      (this.cor === 'B' && movimentoFrenteDireita[0] === 'P') ||
      (this.cor === 'P' && movimentoFrenteDireita[0] === 'B')
    ) {
      const coordYFrenteIndexTeste = +movimentoFrenteDireita[2] + 1;
      const coordXEsquerdaIndexTeste =
        ordem.indexOf(movimentoFrenteDireita[1]) + 1;

      const coordYFrenteTeste =
        coordYFrenteIndexTeste >= 9 ? 0 : coordYFrenteIndexTeste;
      const coordXEsquerdaTeste =
        coordXEsquerdaIndexTeste < 1 ? 0 : coordXEsquerdaIndexTeste;

      const novoMovimentoFrenteParaDireita = this.comerDama(
        ordem[coordXEsquerdaTeste] + coordYFrenteTeste,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const comerEssaDama = movimentoFrenteDireita;
      this.novoMovimentoFrenteParaDireita = [
        novoMovimentoFrenteParaDireita,
        comerEssaDama,
      ];
    }

    return [
      this.novoMovimentoFrenteParaEsqueda,
      this.novoMovimentoFrenteParaDireita,
    ];
  }

  proximaCoord(listaMovimentosBrancas, listaMovimentosPretas) {
    const [
      movimentoFrenteEsquerdo,
      movimentoFrenteDireita,
    ] = this.calcularMovimentoParaFrente(
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );

    const [
      movimentoVoltandoEsquerdo,
      movimentoVoltandoDireita,
    ] = this.calcularMovimentoParaVoltando(
      listaMovimentosBrancas, // <<<
      listaMovimentosPretas,
    );

    return [
      movimentoFrenteEsquerdo,
      movimentoVoltandoEsquerdo,
      movimentoFrenteDireita,
      movimentoVoltandoDireita,
    ];
  }
}

export default SuperDama;

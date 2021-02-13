class ClasseDama {
  constructor() {
    this.name = '';
    this.cor = '';
    this.coluna = '';
    this.linha = '';
    this.posicaoLinha = '';
    this.posicaoColuna = '';

    this.novoMovimentoFrenteParaEsqueda = '';
    this.novoMovimentoFrenteParaDireita = '';

    this.novoMovimentoVoltandoParaEsqueda = '';
    this.novoMovimentoVoltandoParaDireita = '';
  }

  set posicao(posicao) {
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
    this.name = posicao;
    [this.cor, this.coluna, this.linha] = [posicao[0], posicao[1], posicao[2]];

    this.posicaoColuna = posicaoLeft[posicao[1].toLowerCase()];
    this.posicaoLinha = posicaoBottom[+posicao[2] - 1];
  }

  get coorDama() {
    return [this.posicaoLinha, this.posicaoColuna];
  }

  posicaoValida = (posicao, listaMovimentosBrancas, listaMovimentosPretas) => {
    const novaListaDasBrancas = listaMovimentosBrancas.map((item) => item[0]);
    const novaListaDasPretas = listaMovimentosPretas.map((item) => item[0]);

    if (!posicao[0] || !posicao[1]) {
      return -1;
    }
    if (posicao[0] === '0' || posicao[1] === '0') {
      return -1;
    }
    const damaBranca =
      novaListaDasBrancas[novaListaDasBrancas.indexOf(`B${posicao}`)];
    const damaPreta =
      novaListaDasPretas[novaListaDasPretas.indexOf(`P${posicao}`)];

    if (this.cor === 'B' && damaBranca) {
      return -1;
    }
    if (this.cor === 'B' && damaPreta) {
      return damaPreta;
    }
    if (this.cor === 'P' && damaPreta) {
      return -1;
    }
    if (this.cor === 'P' && damaBranca) {
      return damaBranca;
    }
    return this.cor + posicao;
  };

  comerDama = (posicao, listaMovimentosBrancas, listaMovimentosPretas) => {
    const novaListaDasBrancas = listaMovimentosBrancas.map((item) => item[0]);
    const novaListaDasPretas = listaMovimentosPretas.map((item) => item[0]);

    if (!posicao[0] || !posicao[1]) {
      return -1;
    }
    if (posicao[0] === '0' || posicao[1] === '0') {
      return -1;
    }
    const damaBranca =
      novaListaDasBrancas[novaListaDasBrancas.indexOf(`B${posicao}`)];
    const damaPreta =
      novaListaDasPretas[novaListaDasPretas.indexOf(`P${posicao}`)];

    if (damaBranca || damaPreta) {
      return -1;
    }
    return this.cor + posicao;
  };

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

  calcularMovimentoParaVoltando(listaMovimentosBrancas, listaMovimentosPretas) {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    const coordYVoltandoIndex = +this.linha - 1;
    const coordXDireitaIndex = ordem.indexOf(this.coluna) + 1;
    const coordXEsquerdaIndex = ordem.indexOf(this.coluna) - 1;

    const coordYVoltando = coordYVoltandoIndex < 1 ? 0 : coordYVoltandoIndex;
    const coordXDireita = coordXDireitaIndex >= 9 ? 0 : coordXDireitaIndex;
    const coordXEsquerda = coordXEsquerdaIndex < 1 ? 0 : coordXEsquerdaIndex;

    const movimentoVoltandoEsquerdo = this.posicaoValida(
      ordem[coordXEsquerda] + coordYVoltando,
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );

    const movimentoVoltandoDireita = this.posicaoValida(
      ordem[coordXDireita] + coordYVoltando,
      listaMovimentosBrancas,
      listaMovimentosPretas,
    );

    this.novoMovimentoVoltandoParaEsqueda =
      this.cor === 'P' ? [movimentoVoltandoEsquerdo, -1] : [-1, -1];
    this.novoMovimentoVoltandoParaDireita =
      this.cor === 'P' ? [movimentoVoltandoDireita, -1] : [-1, -1];

    if (
      (this.cor === 'B' && movimentoVoltandoEsquerdo[0] === 'P') ||
      (this.cor === 'P' && movimentoVoltandoEsquerdo[0] === 'B')
    ) {
      const coordYFrenteIndexTeste = +movimentoVoltandoEsquerdo[2] - 1;
      const coordXEsquerdaIndexTeste =
        ordem.indexOf(movimentoVoltandoEsquerdo[1]) - 1;

      const coordYFrenteTeste =
        coordYFrenteIndexTeste >= 9 ? 0 : coordYFrenteIndexTeste;
      const coordXEsquerdaTeste =
        coordXEsquerdaIndexTeste < 1 ? 0 : coordXEsquerdaIndexTeste;

      const novoMovimentoFrenteParaEsqueda = this.comerDama(
        ordem[coordXEsquerdaTeste] + coordYFrenteTeste,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const comerEssa = movimentoVoltandoEsquerdo;
      this.novoMovimentoVoltandoParaEsqueda = [
        novoMovimentoFrenteParaEsqueda,
        comerEssa,
      ];
    }
    if (
      (this.cor === 'B' && movimentoVoltandoDireita[0] === 'P') ||
      (this.cor === 'P' && movimentoVoltandoDireita[0] === 'B')
    ) {
      const coordYFrenteIndexTeste = +movimentoVoltandoDireita[2] - 1;
      const coordXEsquerdaIndexTeste =
        ordem.indexOf(movimentoVoltandoDireita[1]) + 1;

      const coordYFrenteTeste =
        coordYFrenteIndexTeste >= 9 ? 0 : coordYFrenteIndexTeste;
      const coordXEsquerdaTeste =
        coordXEsquerdaIndexTeste < 1 ? 0 : coordXEsquerdaIndexTeste;

      const novoMovimentoFrenteParaEsqueda = this.comerDama(
        ordem[coordXEsquerdaTeste] + coordYFrenteTeste,
        listaMovimentosBrancas,
        listaMovimentosPretas,
      );
      const comerEssa = movimentoVoltandoDireita;
      this.novoMovimentoVoltandoParaDireita = [
        novoMovimentoFrenteParaEsqueda,
        comerEssa,
      ];
    }
    return [
      this.novoMovimentoVoltandoParaEsqueda,
      this.novoMovimentoVoltandoParaDireita,
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

export default ClasseDama;

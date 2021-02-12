class ClasseDama {
  constructor() {
    this.name = '';
    this.cor = '';
    this.coluna = '';
    this.linha = '';
    this.posicaoLinha = '';
    this.posicaoColuna = '';
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

  posicaoValdia = (posicao, listaMovimentosBrancas) => {
    if (!posicao[0] || !posicao[1]) {
      return -1;
    }
    if (posicao[0] === '0' || posicao[1] === '0') {
      return -1;
    }
    const DamaBranca = listaMovimentosBrancas.indexOf(this.cor + posicao);
    if (DamaBranca !== -1) {
      return -1;
    }

    return this.cor + posicao;
  };

  proximaCoord(listaMovimentosBrancas) {
    const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    const coordXDireitaIndex = ordem.indexOf(this.coluna) + 1;
    const coordXEsquerdaIndex = ordem.indexOf(this.coluna) - 1;

    const coordXDireita = coordXDireitaIndex >= 9 ? 0 : coordXDireitaIndex;
    const coordXEsquerda = coordXEsquerdaIndex < 1 ? 0 : coordXEsquerdaIndex;

    const coordYFrenteIndex = +this.linha + 1;
    const coordYVoltandoIndex = +this.linha - 1;

    const coordYFrente = coordYFrenteIndex >= 9 ? 0 : coordYFrenteIndex;
    const coordYVoltando = coordYVoltandoIndex < 1 ? 0 : coordYVoltandoIndex;

    const movimentoFrenteEsquerdo = this.posicaoValdia(
      ordem[coordXEsquerda] + coordYFrente,
      listaMovimentosBrancas,
    );
    const movimentoVoltandoEsquerdo = this.posicaoValdia(
      ordem[coordXEsquerda] + coordYVoltando,
      listaMovimentosBrancas,
    );
    const movimentoFrenteDireita = this.posicaoValdia(
      ordem[coordXDireita] + coordYFrente,
      listaMovimentosBrancas,
    );
    const movimentoVoltandoDireita = this.posicaoValdia(
      ordem[coordXDireita] + coordYVoltando,
      listaMovimentosBrancas,
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

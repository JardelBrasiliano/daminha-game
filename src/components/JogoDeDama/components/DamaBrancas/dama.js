function posicaoValdia(posicao, listaMovimentosBrancas) {
  if (!posicao[0] || !posicao[1]) {
    return -1;
  }
  if (posicao[0] === '0' || posicao[1] === '0') {
    return -1;
  }
  const DamaBranca = listaMovimentosBrancas.indexOf(posicao);
  if (DamaBranca !== -1) {
    return -1;
  }
  return posicao;
}

function proximaCoord(posicaoAtual, listaMovimentosBrancas) {
  const ordem = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
  const coordXDireitaIndex = ordem.indexOf(posicaoAtual[0]) + 1;
  const coordXEsquerdaIndex = ordem.indexOf(posicaoAtual[0]) - 1;

  const coordXDireita = coordXDireitaIndex >= 9 ? 0 : coordXDireitaIndex;
  const coordXEsquerda = coordXEsquerdaIndex < 1 ? 0 : coordXEsquerdaIndex;

  const coordYFrenteIndex = +posicaoAtual[1] + 1;
  const coordYVoltandoIndex = +posicaoAtual[1] - 1;

  const coordYFrente = coordYFrenteIndex >= 9 ? 0 : coordYFrenteIndex;
  const coordYVoltando = coordYVoltandoIndex < 1 ? 0 : coordYVoltandoIndex;

  const movimentoFrenteEsquerdo = posicaoValdia(
    ordem[coordXEsquerda] + coordYFrente,
    listaMovimentosBrancas,
  );
  const movimentoVoltandoEsquerdo = posicaoValdia(
    ordem[coordXEsquerda] + coordYVoltando,
    listaMovimentosBrancas,
  );
  const movimentoFrenteDireita = posicaoValdia(
    ordem[coordXDireita] + coordYFrente,
    listaMovimentosBrancas,
  );
  const movimentoVoltandoDireita = posicaoValdia(
    ordem[coordXDireita] + coordYVoltando,
    listaMovimentosBrancas,
  );

  return {
    movimentoFrenteEsquerdo,
    movimentoVoltandoEsquerdo,
    movimentoFrenteDireita,
    movimentoVoltandoDireita,
  };
}

export default proximaCoord;

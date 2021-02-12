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

function convertendoCoordenadas(coord) {
  const coordLeft = coord[1].toLowerCase();
  const coordBottom = coord[2];

  const novaCoordDamaLeft = posicaoLeft[coordLeft];
  const novaCoordDamaBottom = posicaoBottom[+coordBottom - 1];

  return { novaCoordDamaLeft, novaCoordDamaBottom };
}

export { posicaoLeft, posicaoBottom, convertendoCoordenadas };

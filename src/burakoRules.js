export function tilePoints(tile) {
  if (tile.joker) return 50;

  const n = tile.number;
  if (n === 1) return 15;
  if (n === 2) return 20;
  if (n > 2 && n < 8) return 5;
  if (n >= 8) return 10;
  return 5;
}

export function totalScore(tiles) {
  return tiles.reduce((sum, t) => sum + tilePoints(t), 0);
}

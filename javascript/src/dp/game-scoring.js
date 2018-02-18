// Imagine a game (like baseball) where a player can score 1,2 or 4 runs. Given a
// score "n", find the total number of ways score "n" can be reached.

function gameScoringUtil(n, shots, numWays) {
  if (numWays[n]) {
    return numWays[n]
  }

  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  let count = 0;

  for (let i = 0; i < shots.length; i++) {
    count += gameScoringUtil(n - shots[i], shots, numWays)
  }

  numWays[n] = count

  return numWays[n]
}

function gameScoring(n, shots) {
  const numWays = {};
  gameScoringUtil(n, shots, numWays);

  return numWays[n]
}

console.log(gameScoring(3, [1, 2, 4]))
console.log(gameScoring(5, [1, 2, 4]))

module.exports = gameScoring


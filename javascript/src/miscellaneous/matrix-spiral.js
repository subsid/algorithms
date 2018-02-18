// Print matrix in spiral order.
/* eslint-disable */

const directions = {
  cr: 'columnright',
  cl: 'columnleft',
  rd: 'rowdown',
  ru: 'rowup'
}

const toXY = (key) => {
  return key.split(',').map((v) => parseInt(v, 10))
}

const toKey = (x, y) =>
  `${x},${y}`

function getNext(current, bounds, dir, matrix) {
  const [x, y] = toXY(current)
  // cr
  if (dir === directions.cr) {
    if (y + 1 <= bounds.r) {
      return [toKey(x, y + 1), dir]
    }
    return [toKey(x + 1, y), directions.rd]
  // cl
  } else if (dir === directions.cl) {
    if (y - 1 >= bounds.l) {
      return [toKey(x, y - 1), dir]
    }
    return [toKey(x - 1, y), directions.ru]
  // rd
  } else if (dir === directions.rd) {
    if (x + 1 <= bounds.b) {
      return [toKey(x + 1, y), dir]
    }
    return [toKey(x, y - 1), directions.cl]
  }
  // ru
  if (x - 1 >= bounds.t) {
    return [toKey(x - 1, y), dir]
  }
  return [toKey(x, y + 1), directions.cr]
}

function updateBounds({t, l, b, r}) {
  return {
    t: t + 1,
    l: l + 1,
    r: r - 1,
    b: b - 1
  }
}

function addIndexToResult(matrix, indexKey, result) {
  let [x, y] = toXY(indexKey)
  result.push(matrix[x][y])
}

function matrixSpiralUtil(matrix, bounds, seenIndices, result) {
  let start = toKey(bounds.t, bounds.l)
  let d = directions.cr
  let current

  if (!seenIndices.has(start)) {
    addIndexToResult(matrix, start, result)
    seenIndices.add(start)
    let r = getNext(start, bounds, d, matrix)
    current = r[0]
    d = r[1]
    while (current !== start) {
      addIndexToResult(matrix, current, result)
      seenIndices.add(current)
      r = getNext(current, bounds, d, matrix)
      current = r[0]
      d = r[1]
    }
    const newBounds = updateBounds(bounds)
    matrixSpiralUtil(matrix, newBounds, seenIndices, result)
  }
}

function matrixSpiral(matrix) {
  const result = []
  const bounds = {
    t: 0,
    l: 0,
    b: matrix.length - 1,
    r: matrix[0].length - 1
  }
  const seenIndices = new Set()
  matrixSpiralUtil(matrix, bounds, seenIndices, result)

  return result
}

// Check getNextFunction
// console.log(getNext(matrix, `0,0`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.cr, []))
// console.log(getNext(matrix, `0,4`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.cr, []))
// console.log(getNext(matrix, `4,4`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.rd, []))
// console.log(getNext(matrix, `4,0`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.cl, []))
// console.log(getNext(matrix, `0,0`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.ru, []))
// console.log(getNext(`1,0`, {t: 0, l: 0, b: matrix.length - 1, r: matrix[0].length - 1}, directions.ru, matrix))

const m1 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]]

console.log(
  matrixSpiral(m1).toString() ===
  `1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12`
)

const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16] ]

console.log(
  matrixSpiral(m2).toString() ===
  `1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10`
)

module.exports = matrixSpiral

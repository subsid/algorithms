function parenthizeUtil(N, o, c, prefix) {
  if ((o === N) && (c === N)) {
    console.log(prefix)
  } else {
    if (o < N) {
      parenthizeUtil(N, o + 1, c, prefix + "{")

    }
    if ((c < o) && (c < N)) {
      parenthizeUtil(N, o, c + 1, prefix + "}")
    }
  }
}

function parenthize(N) {
  parenthizeUtil(N, 0, 0, "")
}

parenthize(3)

module.exports = parenthize;

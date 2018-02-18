function freqK(arr, k) {
  const bucket = new Array(arr.length + 1);
  const frequencies = new Map();

  arr.forEach((element) => {
    if (frequencies.has(element)) {
      frequencies.set(element, frequencies.get(element) + 1)
    } else {
      frequencies.set(element, 1)
    }
  })

  for (let [k, v] of frequencies) {
    if (bucket[v]) {
      bucket[v].push(k)
    } else {
      bucket[v] = [k]
    }
  }

  let result = [];
  for (let i = bucket.length - 1; i > 0 && result.length < k; i--) {
    if (bucket[i]) {
      bucket[i].forEach((e) => {
        if (result.length < k) {
          result.push(e)
        }
      })
    }
  }

  return result
}

console.log(freqK([1,6,6,6,1,2,1,3, 6, 3,3], 2).toString() === "6,1")

module.exports = freqK;

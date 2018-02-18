// Brute force every coupon, product combination and pick best
//
// coupons :: [Coupon]
// products :: [Product]
// Product :: {price, category}
// Coupon :: {percentage, category}
function maximizeSavings(coupons, products) {
  if ((coupons.length === 0) || (products.length === 0)) {
    return 0
  }
  let globalSavings = 0;
  coupons.forEach((c, ci) => {
    let savingsForCategory = 0;
    c.category.forEach((category, _) => {
      let productSavings = 0;
      products.forEach((p ,pi) => {
        if (p.category === category) {
          let currentSavings = p.price * c.percentage +
            maximizeSavings(coupons.slice(ci + 1), products.slice(0, pi).concat(products.slice(pi + 1)))
          productSavings = Math.max(currentSavings, productSavings)
        }
      })
      savingsForCategory = Math.max(savingsForCategory, productSavings)
    })
    globalSavings = Math.max(globalSavings, savingsForCategory)
  })

  return globalSavings;
}

console.log(maximizeSavings(
  [{percentage: 0.05, category: ["a", "b"]}, {percentage: 0.1, category: ["a", "b"]}],
  [{price: 100, category: "a"}, {price: 1000, category: "a"}, {price: 900, category: "b"}]));

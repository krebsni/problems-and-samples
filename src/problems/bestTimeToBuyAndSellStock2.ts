export function bestTimeToBuyAndSellStock2(prices: number[]): number {
  var totalProfit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    var diff = prices[i + 1] - prices[i]
    if (diff > 0) {
      totalProfit += diff
    }
  }

  return totalProfit
}
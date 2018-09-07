function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let profit = 0,
    curr = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > curr) profit += prices[i] - curr;
    curr = prices[i];
  }
  return profit;
}

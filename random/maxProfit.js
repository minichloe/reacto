// function maxProfit(prices) {
//   if (prices.length < 2) return 0;
//   let tempDiff = 0;
//   tempNum = prices[prices.length - 1];
//   for (let i = prices.length - 2; i >= 0; i--) {
//     if (tempNum > prices[i]) {
//       if (tempDiff < tempNum - prices[i]) tempDiff = tempNum - prices[i];
//     } else {
//       tempNum = prices[i];
//     }
//   }
//   return tempDiff;
// }

function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let lowest = prices[0],
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - lowest > profit) profit = prices[i] - lowest;
    if (lowest > prices[i]) lowest = prices[i];
  }
  return profit;
}

const test = maxProfit([7, 1, 5, 3, 6, 4]);
const test2 = maxProfit([7, 6, 4, 3, 1]);
console.log(test, test2);

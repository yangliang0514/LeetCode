// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// brute force solution, time: O(n^2), exceeding time limit in leetcode
var maxProfit = function (prices) {
  let profit = 0;
  // try every combination and finds the largest profit
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i]);
    }
  }

  return profit;
};

// time: O(n), space: O(1)
var maxProfit = function (prices) {
  // keep in track of the lowest price and largest profit
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // update the minimun price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }
    // current price - minimum price is the current largest profit possible
    // update the maxProfit if the current profit is larger
    maxProfit = Math.max(profit, prices[i] - minPrice);
  }
  return maxProfit;
};

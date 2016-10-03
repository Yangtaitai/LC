// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction 
// (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

// Input: [7, 6, 4, 3, 1]
// Output: 0
// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
 // the worst way brute force
 
var maxProfit = function(prices) {
    if(prices === null || prices.length === 1) return 0;
    var profit = 0;
    for(var i = 0; i < prices.length - 1; i++){
        for(var j = i + 1; j <= prices.length - 1; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i];
            }
        }
    }
    return profit;
}

  // just remeber the minimum price
var maxProfit = function(prices) {
    if(prices === null || prices.length === 1) return 0;
    var profit = 0;
    var min = prices[0];     // important one.
    for(var i = 1; i < prices.length; i++){
        min = prices[i] < min ? prices[i] : min;
        profit = prices[i] - min ? prices[i] - min : profit;
    }
    return profit;
}

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//**  Losses won't be calculated because trying to pick days that will create profit, if no days then return integer of 0. 
//So you need to first select the lowest value and then iterate to see if they are any values higher with a higher index in the array. If so, subtract lowest value from highest value in subsequent index. 
//First find the min value,iterate through the rest of array to see if there is a higher number and select the highest. Subtract those values and return.  


 var maxProfit = function(prices) {

    let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const currentProfit = prices[j] - prices[i];

			if (currentProfit > profit) {
				profit = currentProfit;
			}
	}
    }
	return profit;
   
    
}
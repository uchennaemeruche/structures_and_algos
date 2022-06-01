

// function buySellStock(prices, k) {
//     const n = prices.length

//     for (let i = 0; i < n; i++){
//         for (j = 0; j <)
//     }
// }

var maxProfit = function (prices) {
    let d_i10 = 0;
    let d_i11 = -Infinity;

    for (let i = 0; i < prices.length; i++) {
        d_i10 = Math.max(d_i10, d_i11 + prices[i]);
        d_i11 = Math.max(d_i11, 0 - prices[i]);
    }
    return d_i10;
}


/*

dp[n-1][k][0]
*/
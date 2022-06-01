function maxProfitWithKTransactions(prices, k) {
    // Write your code here.

    if (!prices || prices == null) return 0

    const days = prices.length
    let profitArr = []
    let previousPrice = 0

    for (let i = 1; i < k; i++) {
        profitArr[i] = []
        for (let j = 1; j < days; j++) {
            if (j == 0) {
                profitArr[i][j] = 0
                    // previousPrice = prices[j]
            } else {
                profitArr[i][j] = prices[j] - prices[j + i]
                    // previousPrice = prices[j]
            }

            // previousPrice = prices[j]
        }
    }
    return profitArr


}

function maxProfitWithKTransactions2(prices, k) {
    // Write your code here.
    const days = prices.length
    if (!prices || prices == null || days == 0 || k == 0) return 0

    let costArr = new Array(k).fill(Infinity)

    return prices.reduce((kProfits, price) => {
        console.log('Price', price, "----", kProfits)
        for (let i = 0; i < costArr.length; i++) {
            console.log('i: ', i)
                // console.log("cost array length:", costArr.length)
            console.log("Cost Array Before:", costArr)
            console.log("Profit Array Before:", kProfits)
            if (i === 0) {
                costArr[i] = Math.min(costArr[i], price)
                kProfits[i] = Math.max(kProfits[i], price - costArr[i])
                console.log("Cost Array inside if:", costArr)
                console.log("Profit Array inside if:", kProfits)
            } else {
                costArr[i] = Math.min(costArr[i], price - kProfits[i - 1]);
                kProfits[i] = Math.max(kProfits[i], price - costArr[i]);
                console.log("Cost Array inside else:", costArr)
                console.log("Profit Array inside else:", kProfits)
            }
            console.log("Cost Array After:", costArr)
            console.log("Profit Array After:", kProfits)
            console.log('\n')
        }
        return kProfits;
    }, new Array(k).fill(0))[k - 1]
}

const prices = [5, 11]
const k = 2

console.log(maxProfitWithKTransactions(prices, k))


/*
Inputs:

prices = [5,11,3,50,60,90]
k=2

where prices = prices of a single stock on various days(each index in the array represents a different day) and
      k = number of allowed transactions


NB: 1 transaction = buying a stock on a given day and selling it on another, latter day


Output:
The maximum profit that can be made by buying and selling the stock, given k transactions

*/
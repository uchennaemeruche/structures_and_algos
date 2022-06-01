/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

return arr1.sort(function (a, b) {
    console.log("Values: ",a, b)
    const index1 = arr2.indexOf(a);
    const index2 = arr2.indexOf(b);
    console.log("Index",index1, index2)
    return ((index1 > -1 ? index1 : Infinity) - (index2 > -1 ? index2 : Infinity))
//   return arr2.indexOf(a) - arr2.indexOf(b);
})

  
};



console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6]))
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))

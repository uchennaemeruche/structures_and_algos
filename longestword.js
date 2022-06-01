/*
 * @param {string} word
 * @return {number}
 */

function findLongestWord(word) {
    word = typeof word != 'string' ? x.toString() : word
    const strArr = word.split(" ")
    const arrLength = strArr.length

    let longestNumber = 0;

    for (let i = 0; i < arrLength; i++) {
        if (strArr[i].length > longestNumber) {
            longestNumber = strArr[i].length
        }
    }
    return longestNumber

}

function findLongestWordBySorting(word) {
    word = typeof word != 'string' ? x.toString() : word
    const strArr = word.split(" ");
    strArr.sort((a, b) => b.length - a.length)

    return strArr[0].length

}

console.log(findLongestWordBySorting("The quick brown fox jumped over the lazy dog"))
function checkPalindrome(x) {

    let reversedNum = parseInt(x.toString().split("").reverse().join(""))

    console.log(x)
    console.log(reversedNum)
    if (x === reversedNum) return true
    return false

}


// if (x < 0) return false;

// int num = x;
// long long int rev = 0;
// while (num > 0) {
//     int r = num % 10;
//     rev = rev * 10 + r;
//     num = num / 10;
// }
// return (rev == x) ? true : false;

function isPalindrome(x) {
    if (x < 0) return false
    let num = x,
        rev = 0
    while (num > 0) {
        let r = num % 10
        num = num / 10
    }
    console.log(rev)
    return rev == x
}

function isPalindrome2(x) {
    if (x < 0) return false

    let numStr = x.toString()
    let strLength = numStr.length
    let reversedStr = ""
    for (let i = strLength - 1; i >= 0; i--) {
        reversedStr += numStr[i]
    }
    return parseInt(reversedStr) === x
}

function isPalindromeBySplitting(x) {
    // if (x < 0) return false
    let str = typeof x != 'string' ? x.toString() : x
    const regexp = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regexp, '');
    let strLength = str.length

    for (let i = 0; i < strLength / 2; i++) {
        if (str[i] !== str[strLength - 1 - i]) {
            return false;
        }
    }
    return true;

}

console.log(isPalindromeBySplitting("uche"))
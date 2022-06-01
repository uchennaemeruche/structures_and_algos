/*
 * @param {string} sentence
 * @returns {string}
 */


function convertToTitleCase(sentence) {
    sentence = typeof sentence != 'string' ? x.toString() : sentence
    const strArr = sentence.toLowerCase().split(" "),
        arrLength = strArr.length

    for (let i = 0; i < arrLength; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join(" ")
}

console.log(convertToTitleCase("I'm a little tea pot"))
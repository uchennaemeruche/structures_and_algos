function build2dArray(a, b) {
    let arr = []
    for (let i = 0; i < a; i++) {
        arr[i] = []
        for (let j = 0; j < b; j++) {
            arr[i][j] = j
        }
    }

    // for (let i = 0; i < a; i++) {
    //     for (let j = 0; j < b; j++) {
    //         arr[i][j] = j
    //     }
    // }
    return arr
}

console.log(build2dArray(2, 3))
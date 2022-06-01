const twoSum = function(nums, target) {

    // const arr = [2, 7, 11, 15],
    //     target = 17
    const arrLength = nums.length,
        hashMap = new Map()

    for (let i = 0; i < arrLength; i++) {
        const reverseLookupValue = target - nums[i]
        if (hashMap.has(reverseLookupValue)) {
            return [hashMap.get(reverseLookupValue), i]
        }
        hashMap.set(nums[i], i)
    }

};

// const hashMap = {
//     "2": 0,
//     "7": 1,
//     "11": 2,
//     "15": 3



// }


// Complexity = O(n^2)
function twoSum2(nums, target) {
    let arrLength = nums.length
    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            if (nums[i] + nums[j] == target) {
                // console.log("Match found")
                return [i, j]
            }

        }
    }

}




const compareFunctionRuntime = (nums, target) => {
    const iterations = 1000000;
    console.time('Function #1: twoSum');
    for (var i = 0; i < iterations; i++) {
        twoSum(nums, target)
    };
    console.timeEnd('Function #1: twoSum')


    console.time('Function #2: twoSum2');
    for (var i = 0; i < iterations; i++) {
        twoSum2(nums, target);
    };
    console.timeEnd('Function #2: twoSum2')

}





const arr = [2, 7, 11, 15],
    target = 17


compareFunctionRuntime(arr, target)

// console.time();
// console.log(twoSum(arr, target))
// console.timeEnd();
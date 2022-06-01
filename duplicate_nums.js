const checkDuplicateNumbers = (nums) => {
  if (nums[0] == nums[1] || nums[nums.length-1] == nums[nums.length - 2]) return true;
  

  console.log("Going into loop");
  const newMap = new Set();
  for (const num of nums) {
    if (newMap.has(num)) {
      console.log("Duplicate detected");
      return true;
    }
    newMap.add(num);
  }

  console.log(newMap);

  return false;
};

const containsDuplicate = (nums = []) => {
  const newSet = new Set(nums);
  console.log(newSet);
  return nums.length !== newSet.size;
};


/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}

Input: nums = [1,2,3,1], k = 3
Output: true
Input: nums = [1,0,1,1], k = 1
Output: true
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */
const containsNearbyDuplicate = function(nums, k) {
    const len = nums.length
    if (((nums[0] == nums[1]) && (Math.abs(0-1) == k)) || ((nums[len-1] == nums[len - 2]) && (Math.abs((len-1)-(len-2)) == k))) return true

    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if(nums[i] == nums[j] && Math.abs(i-j) == k) return true
        }
    }
    return false

};
const containsNearbyDuplicate2 = function(nums, k) {
    const len = nums.length
    if (((nums[0] == nums[1]) && (Math.abs(0-1) == k)) || ((nums[len-1] == nums[len - 2]) && (Math.abs((len-1)-(len-2)) == k))) return true

    console.log("Entering loop")
    const numsMap = new Map()
    for (let i = 0; i < len; i++) {
        if(numsMap.has(nums[i]) && Math.abs(i- (i+1) == k)) return true
        numsMap.set(nums[i])
        // console.log("Iteration", i, " : ", nums[i], nums[i+1])
        // if((nums[i] == nums[i+1]) && Math.abs(i-(i+1) == k)) return true
    }
    return false

};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums2 = [1, 2, 1, 3, 4];
const nums3 = [1, 2, 3, 1, 1];
const nums4 = [ 1, 2, 3, 4 ]
const nums5 = [ 1, 2,2, 3, 4 ]

// console.log("containsDuplicate: ", [1, 2, 3, 4]);
// console.log("checkDuplicateNumbers: ", checkDuplicateNumbers(nums5));

console.log("containsNearbyDuplicate: ", containsNearbyDuplicate([99,99], 2));

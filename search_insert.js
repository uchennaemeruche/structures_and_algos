/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let startPosition = 0,
    endPosition = nums.length -1;

    if(nums[startPosition] == target) return startPosition
    if(nums[endPosition] == target) return endPosition
    
    let midPosition = startPosition + parseInt((endPosition - startPosition)/2)

    while(startPosition <=  endPosition){
        if(nums[midPosition] == target) return midPosition
        if(nums[midPosition] > target){
            endPosition = midPosition -1
        }else{
            startPosition = midPosition +1
        }
        midPosition = startPosition + parseInt((endPosition-startPosition)/2)
    }

    if(nums[midPosition] != target){
        if(target > nums[midPosition]) return midPosition+1
        else return midPosition
    }
        
    
   
};


var searchInsert2 = function(nums, target) {
    if(nums[0] == target) return 0
    if(nums[nums.length-1] == target) return nums.length-1
    
    let halfIndex = Math.round(nums.length/2)
    if(nums[halfIndex] == target) return halfIndex

    if(target < nums[halfIndex]){
        nums = nums.slice(0,halfIndex)
    }else{
        nums = nums.slice(halfIndex+1)
    }

    nums.reduce((previous, current) => {
      console.log("Previous", previous, current)
      
    })
    
    console.log("Nums:", nums)
        
    
   
};

console.log(searchInsert([1,3,5,6],2))
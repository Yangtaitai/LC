// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. 
// The algorithm should run in linear time and in O(1) space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var majorityElement = function(nums) {
    if(nums.length <= 1) return nums;
    
    var len = nums.length;
    var map = {};
    var result = [];
    var uniqNumber = [];
    
    for(var i = 0; i < len; i++){
        if(nums[i] in map){
            map[nums[i]] += 1;
        }else{
            map[nums[i]] = 1;
            uniqNumber.push(nums[i]);
        }
    }
    for(var i = 0 ; i < uni.length; i++){
        if(map[uniqNumber[i]] > Math.floor(len / 3)){
            result.push(uniqNumber[i]);
        }
    }
    return result;
}

// Hint : How many majority elements could it possibly have?
// which means there are two elements will appear.
// voting algorithm
var majorityElement = function(nums) {
    // add later
}

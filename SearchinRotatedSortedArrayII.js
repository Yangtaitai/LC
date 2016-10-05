// Follow up for "Search in Rotated Sorted Array":
// What if duplicates are allowed?
// Would this affect the run-time complexity? How and why?
// Write a function to determine if a given target is in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 
 // the worst case [2,2,2], target = 2. so use for is better
var search = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === target) return true;
    }
    return false;
}

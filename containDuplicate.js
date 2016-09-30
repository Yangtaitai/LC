// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
 //use map object
var containsDuplicate = function(nums) {
    if(nums.length === 0 || nums.length === 1) return false;
    
    var map = {};
    var len = nums.length - 1;
    
    for(var i = 0; i < len; i++){
    
        if(nums[i] in map){
            return true;
        }else{
            map[nums[i]] = i;
        }
    }
    return false;
}

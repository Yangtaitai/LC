// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 // this one is similar to the containDuplicate one, except you need to i-j <=k
 // still use the map
 
var containsNearbyDuplicate = function(nums, k){
    var len = nums.length - 1;
    var map = {};
    
    for(var i = 0; i <= len; i++){
        if(nums[i] in map){
            if(i - map[nums[i]] <= k){
                return true;
            } else {                // easiler to forget one !!!
                map[nums[i]] = i;   //if nums[i] in map, but i - map[nums[i]] > k, update the map[num[i]] to i.
            }
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
}

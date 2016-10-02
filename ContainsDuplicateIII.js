// Given an array of integers, find out whether there are two distinct indices i and j in the array
// such that the difference between nums[i] and nums[j] is at most t
// and the difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length;
    if(k <=0 || t < 0 ) return false;
    
    for(var i = 0; i <= len - 2; i++){
        for(var j = i + 1; j <= len - 1; j++){
            if(j - i <= k && nums[j] - nums[i] <= t && nums[i] - nums[j] <= t)
                return true;
        }
    }
    return false;
}

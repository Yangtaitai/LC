// A peak element is an element that is greater than its neighbors.
// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that num[-1] = num[n] = -∞.
// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
 
 // add one element at Array end, which is small.
 
var findPeakElement = function(nums) {  
    if(nums.length === 1) return 0;   // since num[-1] = num[n] = -∞
    nums.push(nums[nums.length - 1] - 1);  // add one element at Array end, which is small than nums[nums.length - 1].
    
    var len = nums.length - 1;
    var pre, after;
    
    for(var i = 1; i <= len - 1; i++){
        pre = nums[i-1];
        after = nums[i+1];
        
        if(pre < nums[i] && after < nums[i]){
            return i;
        }
    }
    return 0;   //such as [2,1], num[-1] = -∞
};


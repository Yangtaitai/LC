// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
// use js function fetch last one and add to the head.
var rotate = function(nums, k) {
    var pointer = nums.length - 1;
    while(k > 0){
        var temp = nums[pointer];
        nums.pop();
        nums.unshift(temp);
        k--;
    }
};

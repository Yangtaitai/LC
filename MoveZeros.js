// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
 // it is similar to the Remove Element one, start from end instead of head, since head will escape.
 // for example: [0,0,1] from head
 // i = 0, [0,1,0]
 // i = 1, [0,1,0]  escape the second 0 and move forward to 1.
 // i = 2, [0,1,0]
 // so we decide to move from end to head.
 
var moveZeroes = function(nums) {
    var i = nums.length - 1;
    while(i >= 0){
      if(nums[i] === 0){
          nums.splice(i,1);
          nums.push(0);
      }
      i--;
    }
};

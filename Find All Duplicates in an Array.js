Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
 
// the worst way of doing this.
var findDuplicates = function(nums) {
    var result = [];
    var len = nums.length;
    nums = nums.sort();
    for(var i = 0; i < len; i++){
      if(nums[i] == nums[i+1]) result.push(nums[i+1]);
    }
    return result;
}


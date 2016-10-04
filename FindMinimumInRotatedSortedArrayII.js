// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
// Find the minimum element.
// The array may contain duplicates.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    var start = 0;
    var end = nums.length-1;
    
    while(start < end){
        if(nums[start] > nums[end]){
            start++;
        }else{
            end--;
        }
    }
    return nums[start];
};

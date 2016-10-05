// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        if(target === nums[i]) return i;
    }
    return -1;
}

// binary search
var search = function(nums, target) {
     if(nums.length === 0 || nums === null) return -1;
    var start = 0;
    var end = nums.length - 1;
    var mid;
    while(start + 1 < end){
        mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target) return mid;
        if(nums[start] < nums[mid]){        // if first half is ASC
            if(nums[start] <= target && target <= nums[mid]){  // target in the first half.
                end = mid;
            }else{
                start = mid;
            }
        }else{                              
            if(target >= nums[mid] && target <= nums[end]){  // target in the second half.
                start = mid;
            }else{
                end = mid;
            }
        }
    }
    if(nums[start] === target) return start;
    if(nums[end] === target) return end;
    return -1;
}

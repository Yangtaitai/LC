// Given an array and a value, remove all instances of that value in place and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// with splice function
var removeElement = function(nums, val) {
 
  for(var i = nums.length-1; i>=0; i--){  // i=nums.length-1 instead of i=0, since i=0 will escape some wit nums.length change.
    if(nums[i] == val)
      nums.splice(i,1);
  }
  return nums.length;
}

// two pointer i, j way.
var removeElement = function(nums, val) {
  var i = 0;
  for(var j = 0;j < nums.length; j++){
    if(nums[j] != val) {      // when not equal, move to array front
        nums[i] = nums[j];
        i++;
    }
  }
  return i;
}

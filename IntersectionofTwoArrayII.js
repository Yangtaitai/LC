// Given two arrays, write a function to compute their intersection.
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1 === null && nums2 === null) return [];
    var map = {};
    var result = [];
    
    for(var i = 0; i < nums1.length; i++){
      if(nums1[i] in map) map[nums1[i]]++;
      else map[nums1[i]] = 1;
    }
    
    for(var j = 0; j < nums2.length; j++){
      if(nums2[j] in map && map[nums2[j]] > 0){
         result.push(nums2[j]);
         map[nums2[j]]--;
      }
    }
    return result;
}

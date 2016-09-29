// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 
 // merge it from the end of nums1.
var merge = function(nums1, m, nums2, n) {
    var pointer = m + n - 1;  //nums1 final length.
    var s1 = m - 1;
    var s2 = n - 1;
    
    while(s1 >= 0 && s2 >= 0){
        if(nums1[s1] >= nums2[s2]){
            nums1[pointer--] = nums1[s1--];
        }else{
            nums1[pointer--] = nums2[s2--];
        }
    }
    while(s1 >= 0){
        nums1[pointer--] = nums1[s1--];
    }
    while(s2 >= 0){
        nums1[pointer--] = nums2[s2--];
    }
}

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4.
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].


/**
 * @param {number[]} nums
 * @return {number}
 */
 
 var arrayPairSum = function(nums) {
    var max = 0;
    var len = nums.length - 1;
    var temp = nums.sort(function(a,b){return b - a;});   // use this sort function since their are array contain negative. 
                                                          // this will make sure the array sort from big to small order.    
    if(len <= 1) {
        return temp[1];                                   // limit condition, such as [1,2], after sort, return [2,1], so return 1.
    }
    
    for(var i = 0; i <= len; i += 2){                     
            max += temp[i+1];
    }
    
    return max;
};

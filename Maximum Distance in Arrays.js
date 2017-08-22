// Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

// Example 1:
// Input: 
// [[1,2,3],
// [4,5],
// [1,2,3]]
// Output: 4
// Explanation: 
// One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
// Note:
// Each given array will have at least 1 number. There will be at least two non-empty arrays.
// The total number of the integers in all the m arrays will be in the range of [2, 10000].
// The integers in the m arrays will be in the range of [-10000, 10000].


/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    var max = 0;
    var temp1 = [];  //use to store the first number in subarray.
    var temp2 = [];  // store the last number in subarray.
    
    for(var i=0; i<arrays.length; i++){
        temp1.push(arrays[i][0]);
        temp2.push(arrays[i][arrays[i].length-1]);
    }
    
    for(var j = 0; j < temp1.length; j++){
        for(var m = 0; m < temp2.length; m++){
            if(j != m && temp2[m]-temp1[j] > max)  //verify temp1[i],temp2[j] are not from same subarray.
                max = temp2[m]-temp1[j];
        }
    }
    
    return max;
};

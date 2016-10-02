// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:
// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
 //brute force way, so slow, convert it to the one-dimension array
var searchMatrix = function(matrix, target) {
    var map = {};
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            map[matrix[i][j]] = i+j;
        }
    }
    if(target in map) {
      return true;
    }
    
    return false;
};

var searchMatrix = function(matrix, target) {
    var col = matrix[0].length - 1;
    for(var i = 0; i < matrix.length; i++){
        if(target <= matrix[i][col]){
            for(var j = col;j>=0;j--){
                if(target == matrix[i][j])
                    return true;
            }
        }
    }
    return false;
};

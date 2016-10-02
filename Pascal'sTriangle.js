// Given numRows, generate the first numRows of Pascal's triangle.
// For example, given numRows = 5,
// Return
// [
//      [1],
//     [1,1],
//   [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]];
    
    var result = [[1],[1,1]];
    
    for(var i = 2;i < numRows; i++){
        var temp = [1];     // first one
        for(var j = 1; j < i; j++){
              temp.push(result[i-1][j-1] + result[i-1][j]);
        }
        temp.push(1);  // last element, better use temp.push(1),since temp = [1],which define the length = 1.
        result.push(temp);
    }
    return result;
}

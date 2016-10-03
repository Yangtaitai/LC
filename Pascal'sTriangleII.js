// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];
    
    var result = [1];
    var temp = getRow(rowIndex - 1);      // important step
    
    for(var i = 1; i <= rowIndex - 1; i++){
        result.push(temp[i-1] + temp[i]);
    }
    result.push(1);
    
    return result;
}

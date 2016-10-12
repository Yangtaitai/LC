// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// For example:
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n === 0) return 0;
    var result = '';
    while(n > 0){
      n--;
      result = String.fromCharCode(65 + n % 26) + result;
      n = parseInt(n / 26);
    }
    return result;
}

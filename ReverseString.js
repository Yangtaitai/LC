/* Write a function that takes a string as input and returns the string reversed.
 * Example:
 * Given s = "hello", return "olleh".
 */
 
 /*
 * @param {string} s
 * @return {string}
 */
 
// 1st approach with for-loop

var reverseString = function(s) {
    var result = '';
    for(var i=s.length-1;i >= 0;i--){
        result += s[i];
    }
    return result;
};

 // 2nd approach with js function
 
 var reverseString = function(s) {
    return s.split('').reverse().join('');
};

var reverseString = function(s) {
    var result = [];
    for(var i=s.length-1, j=0; i >= 0; i--,j++){
        result[j] = s[i];
    }
    return result.join('');
};

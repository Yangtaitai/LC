// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// For example:
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
 
 // I treat num as string.
 
var addDigits = function(num) {
    if(num <= 9) return num;
    var result = 0;
    var temp = num.toString();
    for(var i = 0; i < temp.length; i++){
        result += +temp[i];
    }
    if(result <= 9) return result;
    else return addDigits(result);
}

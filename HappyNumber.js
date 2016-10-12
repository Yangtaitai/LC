// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
// Example: 19 is a happy number
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

// recursive way
var isHappy = function(n) {
    if(n < 10){
        if(n === 1 || n === 7) return true;
        else return false;
    }
    var temp = n.toString();
    var sum = 0;
    for(var i = 0; i < temp.length; i++){
        sum += parseInt(temp[i]) * parseInt(temp[i]);
    }
    return isHappy(sum);
}

// without recursive way
var isHappy = function(n) {
    if(n < 10){
        if(n === 1 || n === 7) return true;
        else return false;
    }
    
    var temp,sum;
    while(n > 10){
        sum = 0;
        temp = n.toString();
        for(var i = 0; i < temp.length; i++){
            sum += parseInt(temp[i]) * parseInt(temp[i]);
        }
        n = sum;
    }
    if(n === 1 || n === 7 || n === 10) 
        return true;
    else
        return false;
}


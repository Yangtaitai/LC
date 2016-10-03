// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var result = [];
    var len = digits.length - 1;
    
    while(len >= 0){
        if(digits[len] >= 9){ 
            digits[len] = 0;    
            if(!digits[len - 1]){         // [9] --> [0], there is no number before 9, so add 1 -> [1,0]
                digits.unshift(1);
            }
        }else{                        
            digits[len] += 1;         //[1,2,3] --> [1,2,4]
            break;
        }
        len--;
    }
    
    return result;
}

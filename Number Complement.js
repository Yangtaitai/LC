Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// 5 = 101, 101 ^ 111 = 010, so we need get the 111. and then do the xor operation.
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(num === 1) return 0;
    
    var numTemp = Number(num).toString(2).split('');
    
    var xorNumber = 1;
    if(numTemp[0] === 0) xorNumber = 0;
    
    for(var i = 1; i < numTemp.length;i++){
        xorNumber += Math.pow(2,i);
    }
    return num ^ xorNumber;
}

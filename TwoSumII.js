// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 
 // similar to the twoSum, use map{} object
var twoSum = function(numbers, target) {
    var len = numbers.length - 1;
    var rest = 0;
    var result = [];
    var map = {};
    for(var i = 0; i<= len; i++){
        rest = target - numbers[i];
        if(rest in map){
            result.push(map[rest] + 1);
            result.push(i + 1);
        }else{
            map[numbers[i]] = i;
        }
    }
    return result;
}

// use two pointer
var twoSum = function(numbers, target) {
    var start = 0;
    var end = numbers.length - 1;    
    while(start < end){
        if(numbers[start] + numbers[end] < target){
            start++;
        }else if(numbers[start] + numbers[end] > target){
            end--;
        }else{
            return [start + 1,end + 1];
        }
    }
}

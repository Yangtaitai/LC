/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution.
*
* Example:
* Given nums = [2, 7, 11, 15], target = 9,
*
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  //brute force method
    var result = [];
    for(var i = 0; i < nums.length; i++){
      for(var j = 1; j < nums.length, j != i; j++){
          if(nums[i] + nums[j] == target){
              result.push(i);
              result.push(j);
          }
      }
    }
    return result;
  
  // much effecient method, using map object
  
    var map = {};     // use map to store key-value pairs (nums[i],i) 
    var result = [];  //  there is other method used map to store the (target - nums[i],i)
    var rest = 0;
    
    for(var i = 0; i < nums.length; i++){
        
        rest = target - nums[i];
        if(rest in map){
            result.push(map[rest]);
            result.push(i);
        }      
        map[nums[i]] = i;
    }
    return result;
    
    //use map to store (target-nums[i] ,i)
    
    var map = {};
    var result = [];
    var rest = 0;
    
    for (var i = 0; i < nums.length; i++) {
        
        if(nums[i] in map){
            result.push(map[nums[i]]);
            result.push(i);
        }
        
        rest = target - nums[i];
        map[rest] = i;
    }
}

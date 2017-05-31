// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores. 


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var len = nums.length;
    var ranked = [];
    var result = [];
    var map = {};
    
    for(var i = 0 ; i < len; i++){
      ranked[i] = nums[i];
    }
    
    ranked = ranked.sort(function(a,b){return b-a});
    
    for(var j = 0 ; j < len; j++){
      switch(j){
        case 0:{
          map[ranked[j]] = 'Gold Medal';
          break;
        }
        case 1:{
          map[ranked[j]] = 'Silver Medal';
          break;
        }
        case 2:{
          map[ranked[j]] = 'Bronze Medal';
          break;
        }
        default:{
          map[ranked[j]] = j + 1 + '';
        }
      }
    }
    
    for(var m = 0 ; m  < len; m++){
      if(nums[m] in map){
        result.push(map[nums[m]]);
        }
    }
    
    return result;
}

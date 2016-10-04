// Given an array of n integers where n > 1, nums, 
//return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Solve it [without division] and in O(n).
// For example, given [1,2,3,4], return [24,12,8,6].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
// if allow division, we need consider the zeros contained in the nums
var productExceptSelf = function(nums) {
    if(nums.length === 0) return nums;
    var len = nums.length - 1;
    var product = 1;
    var output = [];
    var zeroCount = 0;
    
    for(var i = 0; i <= len; i++){
        if(nums[i] === 0) {
           zeroCount++;
        } else {
           product *= nums[i];
        }
    }
    if(zeroCount >= 2){
         for(var i = 0; i <= len; i++){
            output[i] = 0;
        }
    }
    if(zeroCount === 1){
        for(var i = 0; i <= len; i++){
            nums[i] === 0 ? output[i] = product : output[i] = 0;
        }
    }
    if(zeroCount < 1){
        for(var i = 0; i <= len; i++){
            output[i] = product / nums[i];
        }
    }
    return output;
}

 // since the problem require no division,we need find rules.
 // output[i] = (x0 * x1 * ... * xi-1) * (xi+1 * .... * xn-1)
 // x0 ~ xi-1 product
 // then xi+1 ~ xn-1 product
 var productExceptSelf = function(nums) {
      if(nums.length === 0) return nums;
      var len = nums.length;
      var output = [1];
      var temp = 1;
      
      //calculate x0 * ... * xi-1
      for(var i = 1; i < len; i++){
          temp *= nums[i-1];
          output.push(temp);
      }
      temp = 1;
      
      // calculate xi+1 *...* xn-1
      for(var i = len - 2; i >= 0; i--){      
          temp *= nums[i+1];
          output[i] *= temp;
      }
      return output;
 }
 

// Given two arrays, write a function to compute their intersection.
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1 === null || nums2 === null) return [];
    var map = {};
    var result = [];
    
    for(var i = 0; i < nums1.length; i++){  // put all the element in the map;
        map[nums1[i]] = 1;
    }
    
    for(var j = 0; j < nums2.length;j++){   // if element of nums2 in nums1, set map[key] to 0;  
        if(nums2[j] in map) 
            map[nums2[j]] = 0;
    }
    
    // put all the key in result where map[key] = 0
    for(key in map){
        if(map[key] === 0)
            result.push(+key);  //convert string to the number
    }
    return result;
}

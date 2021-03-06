// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
 
 // similar to the Isomorphic Strings problem, bi-direction checking.
var wordPattern = function(pattern, str) {
    var map1 = {};
    var map2 = {};
    var arr = str.split(' ');
    if(pattern.length != arr.length) return false;
    for(var i = 0; i < pattern.length; i++){
        if(pattern[i] in map1){
            if(map1[pattern[i]] != arr[i]) return false;
        }else{
            map1[pattern[i]] = arr[i];
        }
        
        if(arr[i] in map2){
            if(map2[arr[i]] != pattern[i]) return false;
        }else{
            map2[arr[i]] = pattern[i];
        }
    } 
    return true;
}

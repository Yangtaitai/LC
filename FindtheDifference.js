// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.
// Example:
// Input:
// s = "abcd"
// t = "abcde"
// Output:
// e
// Explanation:
// 'e' is the letter that was added.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var map = {};
    
    for(var i = 0; i < s.length; i++){
        if(s[i] in map) map[s[i]]++;
        else map[s[i]] = 1;
    }
    
    for(var j = 0; j < t.length; j++){
        if(t[j] in map) map[t[j]]--;
        else return false;
    }
    
    for(var key in map){
        if(map[key] != 0) return key;
    }
}

// Given two strings s and t, write a function to determine if t is an anagram of s.
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
 // use map object
var isAnagram = function(s, t) {
    if(s === "" || t === "") return true;
    
    var map = {};
    for(var i  = 0; i < s.length; i++){
        if(s[i] in map) map[s[i]]++;
        else map[s[i]] = 1;
    }
    
    for(var j = 0; j < t.length; j++){
        if(t[j] in map) map[t[j]]--;
        else return false;
    }
    
    for(var key in map){
        if(map[key] !== 0) return false;
    }
    
    return true;
}

// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character but a character may map to itself.
// For example,
// Given "egg", "add", return true.
// Given "foo", "bar", return false.
// Given "paper", "title", return true.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
 // with two map for 1 <-> 1 map.
var isIsomorphic = function(s, t) {
    if(s === "" && t === "") return true;
    
    var map1 ={}, map2 = {};
    var len = s.length;
    
    for(var i = 0; i < len; i++){
       var si = s.charAt(i);
       var ti = t.charAt(i);
       
       if(!map1[si]){
          map1[si] = ti;
       }else if(map1[si] != ti){
          return false;
       }
       
       if(!map2[ti]){
          map2[ti] = si;
       }else if(map2[ti] != si){
          return false;
       }
    }
    return true;
};

var isIsomorphic = function(s, t) {
    if(s === "" && t === "") return true;
     var map1 = {}, map2 = {};
     var result1 = "", result2 = "";
     var len = s.length;
     
     for(var i = 0; i < len; i++){
        map1[s[i]] = t[i];
        map2[t[i]] = s[i];
     }
     
     for(var j = 0; j < len; j++){
        result1 += map1[s[j]];
        result2 += map2[t[j]];
     }
     
     return result1 === t && result2 === s;
}

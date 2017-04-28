Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


// use hashmap to store the letter appearence number
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length < 1) return -1;
    
    var map = {};
    for(var i = 0; i < s.length; i++){
        if(s[i] in map) {
          map[s[i]]++;
        }
        else{
          map[s[i]] = 1;
        }
    }
    var result = -1;
    for(var j = s.length-1; j >= 0; j--){
        if(map[s[j]] == 1) {
            result = j;
        }
    }
    return result;
};

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.
// Note:
// Assume the length of given string will not exceed 1,010.

// Example:
// Input:
// "abccccdd"
// Output:
// 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var count = 0;
    var map = {};
    
    for(var i = 0; i < s.length; i++){
        if(s[i] in map) map[s[i]]++;
        else map[s[i]] = 1;
    }
    var odd = 0;
    
    for(var key in map){
        if(map[key] % 2 === 0) count += map[key];   // even time, just add
        if(map[key] % 2 === 1) {                    // odd time, add even time.
            count += map[key] - 1;
            map[key] = 1;
        }
        if(map[key] === 1) odd = 1;                 // if there is 1, just add one time 1.
    }
    return count + odd;
}

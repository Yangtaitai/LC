// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1:
// Given s = "hello", return "holle".
// Example 2:
// Given s = "leetcode", return "leotcede".
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
 // two pointers
var reverseVowels = function(s) {
    if(s === null || s.length === 1) return s;
    var vowels = {'a':1,'e':1,'i':1,'o':1,'u':1,'A':1,'E':1,'I':1,'O':1,'U':1};  // don't forget the capital one.
    s = s.split('');  // turn to array since we can not change a string.
    var i = 0, j = s.length - 1;  // i for head, j for tail
    while(i <= j){
        if(s[i] in vowels){   // when s[i] is
            if(s[j] in vowels){  // and s[j] is
                var c = s[i];
                s[i] = s[j];
                s[j] = c;
                i++;
                j--;
            }else{  // s[i] is, but s[j] is not
                j--;
            }
      }else{    // s[i] is not
        i++;
      }
   }
    
    s = s.join('');
    return s;
}

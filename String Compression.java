/**
 *Implement a method to perform basic string compression using the counts of repeated characters. 
 *For example, the string aabcccccaaa would become a2b1c5a3.
 *If the "compressed" string would not become smaller than the original string, your method should return the original string.
 *You can assume the string has only upper and lower case letters (a-z).

 *Example
 *str=aabcccccaaa return a2b1c5a3
 *str=aabbcc return aabbcc
 *str=aaaa return a4

*/

public class Solution {
    /**
     * @param str: a string
     * @return: a compressed string
     */
    public String compress(String str) {
        // write your code here
        
        if (str == null || str.length() == 0) {
            return "";
        }
        
        int i = 0;
        int count = 1;
        
        StringBuilder compression = new StringBuilder();
        
        while (i < str.length()) {
            count = 1;
            
            while (i + count < str.length() && str.charAt(i) == str.charAt(i + count)) {
                count++;
            }
            
            compression.append(str.charAt(i));
            compression.append(count);
            
            i = i + count;
        }
        
        if (compression.length()  >=  str.length() ) {
            return str;
        }
        
        return compression.toString();
    }
}

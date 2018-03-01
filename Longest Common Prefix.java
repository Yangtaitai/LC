// Given k strings, find the longest common prefix (LCP).

// "ABCD" "ACBD" return "A"

public class Solution {
    /*
     * @param strs: A list of strings
     * @return: The longest common prefix
     */
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
          return "";
        }
        
        String prefix = strs[0];
        
        for (int i = 0 ; i < strs.length; i++) {
          int count = 0;
          while (count < prefix.length() && count < strs[i].length() && prefix.charAt(j) == strs[i].charAt(j)) {
            j++;
          }
          
          if (j == 0) {
            return  "";
          }
          
          prefix = prefix.substring(0,j);
        }
        
        return prefix;
    }
  
}

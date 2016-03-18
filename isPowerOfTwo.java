//Given an integer, write a function to determine if it is a power of two.

public class Solution {
//method 1
/** same theory as method 3, if the number is power of two, the AND operation between itself and negative one will equal to the number itself 
*   since it contains only single one 
*/
    public boolean isPowerOfTwo(int n) {
        if(n <= 0) return false;
       if((n & -n) == n){
           return true;
       }
       return false;
    }

//method 2
/** since if a number is power of 2, it will only contain single one, so we test whether it contains single one. */
    public boolean isPowerOfTwo(int n){
        if(n < 0) return false;
        int countOne = 0;
        while(n > 0){
          countOne += n & 1;
          n >>= 1;
        }
        return countOne == 1;
    }
    
//method 3
/** if a number is power of 2, then when the number decreases by 1, do the and operation with it self, the result should be 0 */
  public boolean isPowerOfTwo(int n){
      return (n > 0)&&((n&(n-1)) == 0);
  }
}

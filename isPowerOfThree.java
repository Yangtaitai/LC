/** Given an integer, write a function to determine if it is a power of three.
  * Follow up:
  * Could you do it without using any loop / recursion?
*/


// approach #1  recursion way
public boolean isPowerOfThree(int n){
  if(n == 0) return false;
  if(n == 1) return true;
  else if(n % 3 == 0) return isPowerOfThree(n/3);
  else return false;
}

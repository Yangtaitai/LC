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

// approach #2 loop way
public boolean isPowerOfThree(int n){
  if(n<0 || n==0) return false;
  while(n%3==0){
   n=n/3;
  }
  return n==1;
}

// approach #3 without loop or recursion, find the largest number that is power of three and all the left one can be the divisor.
public boolean isPowerOfThree(int n){
  if(n<0 || n==0) return false;
  int maxNumber = Math.pow(3,(int)(Math.log(0x7fffffff)/Math.log(3)));
  return maxNumber%n == 0;
}

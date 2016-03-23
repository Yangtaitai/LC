/** Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
*   For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/

// approach #1, it is the most basic approach, bit operation and shift. This approach needs 32 loops since n has 32 bits.

public int hammingWeight(int n){
    int count = 0;
    while(n>0){
      if(n&1 == 1) {    // it means current bit in the most right is 1.
        count = count + 1;
      }
      n >>= 1; // arithmetic shift right 1 bit.
    }
}

/** approach #2, it is much more efficent way, instead of 32 times, it does number of 1 times.
*   suppose n = 9 (1001), n-1 = 8 (1000)
*   first iteration : n & (n-1) = 8 (1000).
*   n = 1000, n-1 = 0111;
*   second iteration: n & (n-1) = 0.
*   so there are two 1s in the 9.
*/

public int hammingWeight(int n){
    int count;
    for(count = 0;n!=0;count++){        
      n &= n-1;       
    }
    return count;
}

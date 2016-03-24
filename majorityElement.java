/** Given an array of size n, find the majority element. 
  * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
  * You may assume that the array is non-empty and the majority element always exist in the array.
  */

// approach #1 sort the array first and then find the longest subarray which contains same number.
public int majorityElement(int[] nums){
    if(nums.length == 1) return nums[0];
    
    Arrays.sort(nums);   // sort the array
    
    int pre = nums[0];
    int count = 1;
    for(int i=1;i<nums.length;i++){
        if(pre == nums[i]){
            count++;
            if(count > nums.length/2) return nums[i];
        }else{
            count = 1;
            pre = nums[i];
        }
    }
    return 0;  
}

// approach #2  using idea of Linear majority voting algorithm
public int majorityElement(int[] nums){
    int count = 0;
    int result = 0;
    
    for(int i=0;i<nums.length;i++){
        if(count == 0){
            result = nums[i];
            count = 1;
        }else if(result == nums[i]){
            count += 1;
        }else{
            count -= 1;
        }
    }
    
    return result;
}

// approach #3 using Arrays.sort()method
 public int majorityElement(int[] nums) {
     if(nums.length == 1) return int[0];
     Arrays.sort(nums);
     return nums[nums.length/2];
 }

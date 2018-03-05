/* 
 * Design and implement a TwoSum class. It should support the following operations: add and find.
 * add - Add the number to an internal data structure.
 * find - Find if there exists any pair of numbers which sum is equal to the value.
 */
 
/* 
 * add(1); add(3); add(5);
 * find(4) // return true
 * find(7) // return false
 */
 
 public class TwoSum {
    /*
     * @param number: An integer
     * @return: nothing
     */
    
    List<Integer> list = new ArrayList<>();
    Map<Integer,Integer> map = new HashMap<>();
    
    public void add(int number) {
        // write your code here
       
        if (map.containsKey(number)) {
            map.put(number,map.get(number) + 1);
        } else {
            map.put(number,1);
            list.add(number);
        }
    }

    /*
     * @param value: An integer
     * @return: Find if there exists any pair of numbers which sum is equal to the value.
     */
    public boolean find(int value) {
        // write your code here
        
        if (list == null || list.size() == 0) {
            return false;
        } 
        
        int size = list.size();
        for (int i = 0 ; i < size; i++) {
            
            int num1 = list.get(i);
            int num2 = value - num1;
            
            if (num1 == num2 && map.get(num1) > 1) {
                return true;
            }
            
            else if (num1 != num2 && map.containsKey(num2)){
                    return true;
            }
        }
        
        return false;
    }
}

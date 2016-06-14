/*
* For a given source string and a target string, you should output the first index(from 0) of target string in source string.
* If target does not exist in source, just return -1.
*/

public int strStr(String source, String target){
  if(source == null || target == null) return -1;
  if(target.length() == 0) return 0;
  
  int slength = source.length();
  int tlength = target.length();
  
  for(int i=0;i<slength;i++){
    if(slength - tlength < i) return -1;
    
    int m = i;
    for(int j=0;j<tlength;j++){
        if(target.charAt(j) == source.charAt(m)){
          if(j == tlength - 1){
            return i;
          }
          m++;
        }else{
          break;
        }
      }
    }
    return -1;
  }

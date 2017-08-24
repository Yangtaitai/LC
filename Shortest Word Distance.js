// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {    
    var temp1=[];  // store index of word1
    var temp2=[];  // store index of word2
    
    for(var i=0;i<words.length;i++){
        if(words[i] == word1){
            temp1.push(i); 
        }
        if(words[i] == word2){
            temp2.push(i); 
        }
    }
    
    var result = temp2[temp2.length-1] > temp1[temp1.length-1] ? temp2[temp2.length-1] : temp1[temp1.length-1];
    
    for(var j=0;j<temp1.length;j++){
        for(var m=0;m<temp2.length;m++){
            if(Math.abs(temp2[m]-temp1[j]) < result)
                result = Math.abs(temp2[m]-temp1[j]);
        }
    }
    
    return result;
};

// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var map = {};   // use map to record the move, if the total = 0. true, has circle. trick: make UD LR different number.
    map['U'] = 1;
    map['D'] = -1;
    map['L'] = 2;
    map['R'] = -2;
    
    var num = 0;
    var temp = moves.split('');
    
    for(var i = 0; i < temp.length; i++){
        num += map[temp[i]];
    }
    return num === 0 ? true:false;
};

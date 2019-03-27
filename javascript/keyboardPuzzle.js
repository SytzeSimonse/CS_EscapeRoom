// Check if alt+'+ (add)'+o are pressed
var map = {18: false, 79: false, 107: false};
$(document).keydown(function(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[18] && map[79] && map[107]) {
      new Audio("resources/toothUnlocked.wav").play();
      backdoor_conditions[1] = true;
    }
  }
}).keyup(function(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
});

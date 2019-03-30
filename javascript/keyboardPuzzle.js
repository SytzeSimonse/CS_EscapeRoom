// Check if alt+'+ (add)'+o are pressed
var map = {18: false, 79: false, 107: false};
$(document).keydown(function(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    // Check if alt+add+o keys are pressed.
    if (map[18] && map[79] && map[107] && !backdoor_conditions[1]) {
      new Audio("resources/toothUnlocked.wav").play();
      backdoor_conditions[1] = true;
      $(document).ready(function() {
        $("#light2").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
      });
    }
  }
}).keyup(function(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
});

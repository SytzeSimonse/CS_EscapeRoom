// Check if alt+'+ (add)'+o are pressed
var map = {18: false, 79: false, 107: false};
$(document).keydown(function(e) {

  // Press enter to skip.
  // TODO: Remove code below.
  if (e.keyCode == '13') {
    backdoor_conditions[0] = true;
    backdoor_conditions[1] = true;
    backdoor_conditions[2] = true;
    $(document).ready(function() {
      $("#light1").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
    });
    $(document).ready(function() {
      $("#light2").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
    });
    $(document).ready(function() {
      $("#light3").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
    });
  } else {
    // Nothing...
  }

  if (e.keyCode in map) {
    map[e.keyCode] = true;
    // Check if alt+add+o keys are pressed.
    if (map[18] && map[79] && map[107] && backdoor_conditions[1] != true) {

      console.log("Before:");
      console.log(backdoor_conditions);

      new Audio("resources/toothUnlocked.wav").play();
      backdoor_conditions[1] = true;

      console.log(backdoor_conditions);
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

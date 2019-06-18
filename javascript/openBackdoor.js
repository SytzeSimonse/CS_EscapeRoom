function checkReady(event) {

}

// Define variables for opening backdoor.
// - tooth_broken: Right combination of tooth is given.
// - keyboard_broken: Right keyboard key is pressed.
// - eye_broken: Right amount of times the eye is clicked.
var tooth_broken = false;
var keyboard_broken = false;
var eye_broken = false;

// Put all variables in one array.
var backdoor_conditions = [
  tooth_broken,
  keyboard_broken,
  eye_broken
];

// Place all code in JQuery 'ready'.
$(function() {
  // Function: checkTrue. Checks if a Boolean is true.
  // @boolean boolean: Boolean which is checked.
  function checkTrue(boolean) {
    return boolean == true;
  }

  var backdoorClosed = true;

  // Check if all backdoor conditions are met (true).
  function backdoorOpen() {
    if (backdoor_conditions.every(checkTrue) && backdoorClosed) {

      console.log(backdoor_conditions);

      new Audio("../resources/sounds/access.mp3").play();
      backdoorClosed = false;
      setTimeout(function() {
        // Show form.
        $("#backdoorForm").css({"display":"table-row"});
        return true;
      }, 3000);
    } else {
      return false;
    }
  }

  window.setInterval(backdoorOpen, 1000);

  // End of JQuery document ready function.
});

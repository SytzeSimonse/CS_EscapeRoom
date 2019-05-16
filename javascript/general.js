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
]

// Place all code in JQuery 'ready'.
$(function() {

  // Function: playMorse. Play sound file every X seconds.
  // @intervalMinutes int:  Interval in minutes between playing the sound.
  // @audioFile string:     Path to audio file to play.
  function playMorse(intervalMinutes,audioFile) {
    var intervalID = window.setInterval(playSound, 1000 * 60 * intervalMinutes);

    function playSound() {
      var audio = new Audio(audioFile);
      audio.play();
    }
  }

  // Play Morse-code every 2 minutes.
  playMorse(2,"resources/morse.wav");

  // Check if all conditions are met to open portal (backdoor).

  // Function: checkTrue. Checks if a Boolean is true.
  // @boolean boolean: Boolean which is checked.
  function checkTrue(boolean) {
    return boolean == true;
  }

  var backdoorClosed = true;

  // Check if all backdoor conditions are met (true).
  // function backdoorOpen() {
  //   if (backdoor_conditions.every(checkTrue) && backdoorClosed) {
  //     new Audio("resources/access.mp3").play();
  //     backdoorClosed = false;
  //     setTimeout(function() {
  //       window.location.replace("portal.php");
  //     }, 3000);
  //   } else {
  //     return false;
  //   }
  // }

  window.setInterval(backdoorOpen, 2000);

  // End of JQuery document ready function.
});

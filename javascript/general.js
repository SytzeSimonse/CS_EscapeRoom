// Show message when user wants to go to another page, i.e. ending the game.
/*
window.onbeforeunload = function(){
  return 'Are you sure you want to leave? The game will be stopped.';
};
*/

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

  // Function: countdown. Counts down from 'minutes' to zero.
  // @minutes int:    Amount of minutes to countdown from.
  // @endText string: Text to display when timer reaches zero.
  var timeoutHandle;
  function countdown(minutes,endText) {
      var seconds = 60;
      var mins = minutes
      function tick() {
          var timer = document.getElementById("timer")
          var current_minutes = mins-1
          seconds--;
          timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
          // Checks when timer reaches zero.
          if (seconds < 1 && current_minutes < 1) {
            alert(endText);
          }
          if (seconds > 0) {
              timeoutHandle=setTimeout(tick, 1000);
          } else {
              if(mins > 1){
                 // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                 setTimeout(function () { countdown(mins - 1); }, 1000);
              }
          }
      }
      tick();
  }
  countdown(60,"GAME OVER");

  // Check if all conditions are met to open portal (backdoor).

  // Function: checkTrue. Checks if a Boolean is true.
  // @boolean boolean: Boolean which is checked.
  function checkTrue(boolean) {
    return boolean == true;
  }

  var backdoorClosed = true;

  // Check if all backdoor conditions are met (true).
  function backdoorOpen() {
    if (backdoor_conditions.every(checkTrue) && backdoorClosed) {
      new Audio("resources/access.mp3").play();
      backdoorClosed = false;
      alert("oke");
      setTimeout(function() {
        window.location.replace("portal.php");
      }, 3000);
    } else {
      return false;
    }
  }

  window.setInterval(backdoorOpen, 2000);

  // End of JQuery document ready function.
});

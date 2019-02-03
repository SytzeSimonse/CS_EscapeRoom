// Show message when user wants to go to another page, i.e. ending the game.
window.onbeforeunload = function(){
  return 'Are you sure you want to leave? The game will be stopped.';
};

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
      var seconds = 5;
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
  countdown(1,"GAME OVER");

  // End of JQuery document ready function.
});

// // Show
// var count = 60 * 60;
//
// var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
//
// function timer()
// {
//   count = count-1;
//
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      alert("GAME OVER");
//   }
//
//   //Do code for showing the number of seconds here
//   // document.getElementById("timer").innerHTML = counter.toString();
//   document.getElementById("timer").innerHTML = String(count);
// }

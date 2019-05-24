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
  playMorse(2,"../resources/morse.wav");

});

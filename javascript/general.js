// Show message when user wants to go to another page, i.e. ending the game.
window.onbeforeunload = function(){
  return 'Are you sure you want to leave? The game will be stopped.';
};

// Play Morse-sound every X sec.
function playMorse(intervalMinutes,audioFile) {
  var intervalID = window.setInterval(playSound, 1000 * 60 * intervalMinutes);

  function playSound() {
    var audio = new Audio(audioFile);
    audio.play();
  }
}

// Play morse every 2 minutes.
playMorse(2,"resources/morse.wav");

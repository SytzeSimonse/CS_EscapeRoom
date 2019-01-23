// Check if browser is in fullscreen mode.
function checkFullscreen() {
  if (!window.screenTop && !window.screenY) {
      alert('Browser is in fullscreen');
  } else {
    alert('Browser is not in fullscreen yet');
  }
}

// Play Morse-sound every X sec.
function playMorse(intervalMinutes,audioFile) {
  var intervalID = window.setInterval(playSound, 1000 * 60 * intervalMinutes);

  function playSound() {
    var audio = new Audio(audioFile);
    audio.play();
  }
}

// Play morse every 2 minutes.
playMorse(0.5,"sources/morse.wav");

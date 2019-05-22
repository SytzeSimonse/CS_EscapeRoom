// JS for setting up game.

// Redirect (i.e. start) to game when click.
// var goToURL = function () {
//     document.removeEventListener('click', goToURL, false);
//     window.location.replace("Stage-1/game.php");
// };
//
// document.addEventListener('click', goToURL, false);

// Check if browser is in fullscreen mode.
// TODO: If fullscreen is not enabled, inform user.
function checkFullscreen() {
  if (!window.screenTop && !window.screenY) {
    alert('Browser is in fullscreen');
    return true;
  } else {
    alert('Browser is not in fullscreen yet');
    return false;
  }
}

function checkReady(event) {
  // Add conditions.
  if (checkFullscreen()) {
    event.returnValue = true;
  } else {
    event.returnValue = false;
  }
}

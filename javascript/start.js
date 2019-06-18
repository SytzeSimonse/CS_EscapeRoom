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
    return true;
  } else {
    alert('Browser is not in fullscreen yet');
    return false;
  }
}

function checkAcceptedBrowser() {
  // Accepted browsers:
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';
  // Chrome 1 - 71
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  if (isFirefox || isChrome) {
    return true;
  } else {
    alert("You are not using an accepted browser.");
    return false;
  }
}

function checkReady(event) {
  // Add conditions.
  if (checkFullscreen() && checkAcceptedBrowser()) {
    event.returnValue = true;
  } else {
    event.returnValue = false;
  }
}

function updateDurationValue(val) {
  document.getElementById('durationValue').value=val;
}

updateDurationValue();

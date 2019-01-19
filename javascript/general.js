// Check if browser is in fullscreen mode.
function checkFullscreen() {
  if (!window.screenTop && !window.screenY) {
      alert('Browser is in fullscreen');
  } else {
    alert('Browser is not in fullscreen yet');
  }  
}

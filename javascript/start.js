// JS for setting up game.
//
//

// Redirect (i.e. start) to game when click.
var goToURL = function () {
    document.removeEventListener('mousemove', goToURL, false);
    window.location.replace("game.html");
};

document.addEventListener('click', goToURL, false);

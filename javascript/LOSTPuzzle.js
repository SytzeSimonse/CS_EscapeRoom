$(document).ready(function() {

  console.log("The 'LOSTPuzzle.js file has loaded.'");

  // SVG arrow
  // > ^ < v
  var arrows = [
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%' height='80%'                            viewBox='0 0 60 80' preserveAspectRatio='xMidYMid meet' x='0' y='0' xml:space='preserve'><polyline cx='50%' cy'50%' fill='none' stroke='#FFFFFF' stroke-width='0.2em' stroke-linecap='round' stroke-linejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%' height='80%'   transform = 'rotate(-90)'  viewBox='0 0 80 80' preserveAspectRatio='xMidYMid meet' x='0' y='0' xml:space='preserve'><polyline cx='50%' cy'50%' fill='none' stroke='#FFFFFF' stroke-width='0.2em' stroke-linecap='round' stroke-linejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%' height='80%'   transform = 'rotate(-180)' viewBox='0 0 80 80' preserveAspectRatio='xMidYMid meet' x='0' y='0' xml:space='preserve'><polyline cx='50%' cy'50%' fill='none' stroke='#FFFFFF' stroke-width='0.2em' stroke-linecap='round' stroke-linejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%' height='80%'   transform = 'rotate(-270)' viewBox='0 0 80 80' xml:space='preserve'><polyline fill='none' stroke='#FFFFFF' stroke-width='0.2em' stroke-linecap='round' stroke-linejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8'/></svg>"
  ];

  var combinationArrowKey = {
    37: arrows[2],
    38: arrows[1],
    39: arrows[0],
    40: arrows[3]
  }

  var number;
  function changeKey() {
    // Save previous number to var.
    oldNumber = number;
    number = 37 + Math.floor(Math.random() * 4);

    // Check if the number is different, otherwise perform again.
    if (number == oldNumber) {
      changeKey();
    }

    $('#arrowScreen').html(combinationArrowKey[number]);

    // Blink effect
    $('#lostSign').fadeOut(100);
    $('#lostSign').fadeIn(200);
  }

  // Start with changekey.
  changeKey();

  var progressbar;
  var t;
  var t2;

  function restart() {
    clearTimeout(t);
    progressbar.progressbar('value', 0);
    t2 = setTimeout(progress, 2000);
  };

  function progress() {
      var val = progressbar.progressbar('value') || 0;
      progressbar.progressbar('value', val + 10);
      clearTimeout(t2);
      console.log(val);
      if (val < 99) {
        t = setTimeout(progress, 1000);
      } else if (val >= 99) {
        // Change SVG.
        changeKey();

        // Subtract time from timer.
        stopwatch.subtract(20);

        //Restart timer.
        restart();
      } else {
        
      }
  };

  function headerBar() {
    progressbar = $('#timerBar');
    progressbar.progressbar({
      value: 0
    });

    progress();
  }

  headerBar();

  // setInterval(function () {
  //     progressbar.progressbar('value', 0);
  // }, 10 * 1000);

  $("#timerBar").css({ 'background': 'Black' });
  $("#timerBar").css({ 'border': '2px solid black' });
  $("#timerBar > div").css({ 'background': 'Lime' });
  $("#timerBar").css({ 'height': '10%' });
  $("#timerBar").css({ 'margin': '10%' });

  $(document).keyup(function (e) {
    if (e.keyCode == number) {
      new Audio("resources/toothUnlocked.wav").play();

      $('#arrowScreen > svg > polyline').animate({fill: '#FF0000'}, 'fast');

      changeKey();

      restart();
    }
  });

});

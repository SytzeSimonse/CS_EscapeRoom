// 37-40: left, up, right, down
$(document).ready(function() {

  var keys = ['>','<','^','v'];
  var combination = {37: '<', 38: '^', 39: '>', 40: 'v'}
  var number = 0;

  function changeKey() {
    // Show randomized arrow sign
    number = 37 + Math.floor(Math.random() * 4);
    $('#lostSign').text(combination[number]);
    $('#arrowScreen').html("<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%' height='80%' viewBox='0 0 80 80' xml:space='preserve'><polyline fill='none' stroke='#FFFFFF' stroke-width='0.2em' stroke-linecap='round' stroke-linejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8'/></svg>")

    // Blink effect
    $('#lostSign').fadeOut(100);
    $('#lostSign').fadeIn(200);

    // // If correct key is pressed down, play sound
    // $(document).keydown(function(e) {
    //   if (e.keyCode == number) {
    //     new Audio("resources/toothUnlocked.wav").play();
    //     changeKey();
    //   } else {
    //     new Audio("resources/error.wav").play();
    //   }
    // });
  }

  changeKey();

  $(document).keyup(function (e) {
    if (e.keyCode == number) {
      new Audio("resources/toothUnlocked.wav").play();
      changeKey();
      //
      // setTimeout(function(){
      //   changeKey();
      // }, 2000);
    }
  });

  var progressbar;

  function headerBar() {
      progressbar = $('#timerBar');
      progressbar.progressbar({
          value: 0,
          complete: function() {
                  changeKey();
                  // Subtract time from timer.
                  

                  // mins = mins - 1;
                  // progressbar.progressbar('option', 'value', 0);
                  // progress();
               }
      });

      function progress() {
          var val = progressbar.progressbar('value') || 0;
          //alert(val);
          progressbar.progressbar('value', val + 10);
          if (val < 99) {
              setTimeout(progress, 500);
          }
      }
      progress();
  }
  headerBar();

  setInterval(function () {
      progressbar.progressbar('value', 0);
      headerBar();
  }, 10 * 1000);

  $("#timerBar").css({ 'background': 'Black' });
  $("#timerBar > div").css({ 'background': 'Lime' });
  $("#timerBar").css({ 'height': '10%' });
  $("#timerBar").css({ 'margin': '10%' });

});

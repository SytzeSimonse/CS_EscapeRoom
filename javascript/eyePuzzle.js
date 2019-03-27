$(document).ready(function() {
  var counter = 0;

  $("#left_eye").click(function () {
    counter++;

    if (counter == 14) {
      setTimeout(function() {
        if (counter == 14) {
          new Audio("resources/toothUnlocked.wav").play();
          backdoor_conditions[2] = true;
        }
      }, 1500);
    }

    setTimeout(function() {
      counter = 0;
    }, 10000);
  });
});

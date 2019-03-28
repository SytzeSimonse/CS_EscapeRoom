$(document).ready(function() {
  var counter = 0;

  $("#left_eye").click(function () {
    counter++;

    if (counter == 14) {
      setTimeout(function() {
        if (counter == 14) {
          new Audio("resources/toothUnlocked.wav").play();
          backdoor_conditions[2] = true;
          $(document).ready(function() {
            $("#light3").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
          });
        }
      }, 1500);
    }

    setTimeout(function() {
      counter = 0;
    }, 10000);
  });
});

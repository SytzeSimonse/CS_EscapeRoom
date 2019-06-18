$(document).ready(function() {
  var counter = 0;

  $("#left_eye").click(function () {
    counter++;

    if (backdoor_conditions[2] == false) {
      new Audio("../resources/sounds/click.wav").play();
      $(this).html(counter);
    }

    // Press left eye 14 times, then wait for 1,5 seconds.
    if (counter == 14) {
      setTimeout(function() {
        if (counter == 14) {

          new Audio("/resources/sounds/toothUnlocked.wav").play();
          backdoor_conditions[2] = true;

          // Remove number from the eye.
          $("#left_eye").html("");
          $("#left_eye").css("background-image", "radial-gradient(circle, white, #ff3333,#990000,#b30000,#cc0000, #e60000,#330000)");

          $(document).ready(function() {
            $("#light3").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
          });
        }
      }, 1500);
    }

    setTimeout(function() {
      counter = 0;
      // Remove number from the eye.
      $("#left_eye").html("");
    }, 20000);
  });
});

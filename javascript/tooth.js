// Tests if JQuery loads.
// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// Start JQuery functions.
$(function() {
  var teethCombinationCorrect = false;

  $('.tooth').click(function() {
    if (!teethCombinationCorrect) {
      if ($(this).hasClass("toothA")) {
        $(this).removeClass("toothA").addClass("toothB");
      } else if ($(this).hasClass("toothB")) {
        $(this).removeClass("toothB").addClass("toothC");
      } else if ($(this).hasClass("toothC")) {
        $(this).removeClass("toothC");
      } else {
        $(this).addClass("toothA");
      }

      checkCorrectTeethCombination();
    }
  });

  // Function: checkCorrectTeethCombination. Checks if the teeth are in the right combination.
  function checkCorrectTeethCombination() {
    if ($("#tooth1").hasClass("toothA") && $("#tooth3").hasClass("toothA") && $("#tooth8").hasClass("toothA")) {
      $(".tooth").animate({backgroundColor: "#4E1402"});
      teethCombinationCorrect = true;
      new Audio("resources/toothUnlocked.wav").play();
    } else {
      // TODO: Geluid implementeren.
    }
  }
});

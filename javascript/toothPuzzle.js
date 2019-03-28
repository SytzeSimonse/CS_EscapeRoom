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
        $(this).removeClass("toothC").addClass("toothD");
      } else if ($(this).hasClass("toothD")) {
        $(this).removeClass("toothD").addClass("toothE");
      } else if ($(this).hasClass("toothE")) {
        $(this).removeClass("toothE").addClass("toothF");
      } else if ($(this).hasClass("toothF")) {
        $(this).removeClass("toothF");
      } else {
        $(this).addClass("toothA");
      }

      checkCorrectTeethCombination();
    }
  });

  // Function: checkCorrectTeethCombination. Checks if the teeth are in the right combination.
  function checkCorrectTeethCombination() {
    if

    (

      // Checks if the teeth are in the right combination.
      $("#tooth1").hasClass("toothB") &&
      $('#tooth2')[0].classList.length == 1 &&
      $('#tooth3')[0].classList.length == 1 &&
      $('#tooth4')[0].classList.length == 1 &&
      $('#tooth5')[0].classList.length == 1 &&
      $('#tooth6')[0].classList.length == 1 &&
      $('#tooth7')[0].classList.length == 1 &&
      $("#tooth8").hasClass("toothE") &&
      $("#tooth9").hasClass("toothF") &&
      $('#tooth10')[0].classList.length == 1

    )

    {
      $(".tooth").animate({backgroundColor: "#4E1402"});
      teethCombinationCorrect = true;
      tooth_broken = true;
      new Audio("resources/toothUnlocked.wav").play();

      backdoor_conditions[0] = true;
      $(document).ready(function() {
        $("#light1").animate({backgroundImage: "radial-gradient(#ff3333,#e60000,#330000)"});
        //$("#light1").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
      });

      setTimeout(function(){
        new Audio("resources/speech.mp3").play();
      }, 1000);
    } else {
      new Audio("resources/toothClick.mp3").play();
    }
  }
});

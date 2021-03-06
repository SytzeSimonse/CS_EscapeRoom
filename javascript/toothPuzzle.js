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
        // $(this).css("backgroundImage","radial-gradient(#505050,#303030)");
      } else {
        // $(this).css("backgroundImage","none");
        $(this).addClass("toothA");
      }

      checkCorrectTeethCombination();
    }
  });

  // Function: checkCorrectTeethCombination. Checks if the teeth are in the right combination.
  function checkCorrectTeethCombination() {

    if

    (

      // Checks if the teeth are in the right combination:
      $("#tooth1").hasClass("toothB") &&
      $('#tooth2')[0].classList.length == 2 &&
      $('#tooth3')[0].classList.length == 2 &&
      $('#tooth4')[0].classList.length == 2 &&
      $('#tooth5')[0].classList.length == 2 &&
      $('#tooth6')[0].classList.length == 2 &&
      $('#tooth7')[0].classList.length == 2 &&
      $("#tooth8").hasClass("toothE") &&
      $("#tooth9").hasClass("toothF") &&
      $('#tooth10')[0].classList.length == 2

    )

    {
      $(".tooth").animate({backgroundColor: "#4E1402"});
      // teethCombinationCorrect = true;
      // tooth_broken = true;
      new Audio("../resources/sounds/toothUnlocked.wav").play();
      backdoor_conditions[0] = true;
      console.log(backdoor_conditions);

      $(document).ready(function() {
        $("#light1").css("background-image", "radial-gradient(#ff3333,#e60000,#330000)");
      });

      setTimeout(function(){
        new Audio("../resources/sounds/speech.mp3").play();
      }, 1000);
    } else {
      new Audio("../resources/sounds/toothClick.mp3").play();
    }
  }
});

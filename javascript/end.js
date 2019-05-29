function end() {
  $("#timer").html("63:81");
  $("#timer_header").html("EXIT CODE:");
  $("#timer, #timer_header").css({"color":"lime"});
  $("#timer").css({"animation":"blinker 2s linear infinite"});
  $("#end-message_container").css({"visibility":"visible"});

  stopwatch.stop();
}

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>CS EscapeRoom</title>

    <!-- Incude CSS -->
    <link rel="stylesheet" href="../css/main.css">

    <!-- Include JQuery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Include JQuery UI -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!-- Include JQuery Color -->
    <script
			  src="https://code.jquery.com/color/jquery.color-2.1.2.js"
			  integrity="sha256-1Cn7TdfHiMcEbTuku97ZRSGt2b3SvZftEIn68UMgHC8="
			  crossorigin="anonymous">
    </script>

    <!-- Include external scripts -->
    <script type="text/javascript" src="../javascript/general.js"></script>
    <script type="text/javascript" src="../javascript/openBackdoor.js"></script>

    <!-- Include puzzle scripts -->
    <script type="text/javascript" src="../javascript/toothPuzzle.js"></script>
    <script type="text/javascript" src="../javascript/keyboardPuzzle.js"></script>
    <script type="text/javascript" src="../javascript/eyePuzzle.js"></script>

    <script type="text/javascript" src="../javascript/timer.js"></script>

    <script>
      var duration = <?php echo $_POST["duration"]; ?>;

      function load() {
          stopwatch = new Stopwatch({
          'element': $('#timer'),// DOM element
          'paused': false,                    // Status
          'elapsed': 1000 * 60 * duration,          // Current time in milliseconds
          'countingUp': false,                // Counting up or down
          'timeLimit': 1000 * 6,              // Time limit in milliseconds
          'updateRate': 100,                  // Update rate, in milliseconds
          'onTimeUp': function() {            // onTimeUp callback
            this.stop();
            $(this.element).html('Countdown finished!');
          },
          'onTimeUpdate': function() {        // onTimeUpdate callback
            var t = this.elapsed,
                h = ('0' + Math.floor(t / 3600000)).slice(-2),
                m = ('0' + Math.floor(t % 3600000 / 60000)).slice(-2),
                s = ('0' + Math.floor(t % 60000 / 1000)).slice(-2);
            var formattedTime = m + ':' + s;
            $(this.element).html(formattedTime);

            $("#duration_seconds").val(s);
            $("#duration_minutes").val(m);
          }
        });
      }
      window.onload = load;
    </script>

  </head>
  <body>

  <!--
    The backdoor lights:
    Every time a requirement is met to open the backdoor, a light is switched on.
  -->
  <div id="light_container">
    <div style="display: table-row-group;">
      <div style="display: table-row;">
        <div class="light" id="light1"></div>
        <div class="light" id="light2"></div>
        <div class="light" id="light3"></div>
      </div>
    </div>

    <div id="backdoorFormDiv">
      <form id="backdoorForm" action="../Stage-2/portal.php" method="post" onsubmit="checkReady(event);">
        <input type="hidden" id="duration_seconds" name="duration_seconds">
        <input type="hidden" id="duration_minutes" name="duration_minutes">
        <input type="submit" value="Go to portal"/>
      </form>
    </div>
  </div>

    <!-- The escape room timer -->
    <div id="timer_container">
      <div>Time left</div>
      <div id="timer"></div>
    </div>

    <!-- Create BEE_ZEE (the robot) -->
    <div id="beezee_container">

      <!-- FRAME eyes -->
      <div id="eyes_container">
        <div class="eye" id="left_eye"></div>
        <div class="eye" id="right_eye"></div>
      </div>

      <!-- FRAME mouth -->
      <div id="mouth_container">
        <div class="tooth toothBlank" id="tooth1">1</div>
        <div class="tooth toothBlank" id="tooth2">2</div>
        <div class="tooth toothBlank" id="tooth3">3</div>
        <div class="tooth toothBlank" id="tooth4">4</div>
        <div class="tooth toothBlank" id="tooth5">5</div>
        <div class="tooth toothBlank" id="tooth6">6</div>
        <div class="tooth toothBlank" id="tooth7">7</div>
        <div class="tooth toothBlank" id="tooth8">8</div>
        <div class="tooth toothBlank" id="tooth9">9</div>
        <div class="tooth toothBlank" id="tooth10">10</div>
      </div>

    </div>

    <!--
    <div id="lostPuzzlePanel">
      <div id="lostPuzzleText">
        Verify you are human by pressing the right keys:
      </div>
      <div id="arrowScreen">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80%" height="80%" viewBox="0 0 80 80" xml:space="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="0.2em" stroke-linecap="round" stroke-linejoin="round" points="
          0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </div>
      <div id="timerBar"></div>
    </div>
  -->

  </body>
</html>

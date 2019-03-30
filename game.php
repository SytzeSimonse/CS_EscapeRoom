<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>BEEZEE</title>
    <link rel="stylesheet" href="css/main.css">

    <!-- Include JQuery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!-- Include JQuery Color -->
    <script
			  src="https://code.jquery.com/color/jquery.color-2.1.2.js"
			  integrity="sha256-1Cn7TdfHiMcEbTuku97ZRSGt2b3SvZftEIn68UMgHC8="
			  crossorigin="anonymous">
    </script>

    <!-- Include external scripts -->
    <script type="text/javascript" src="javascript/general.js"></script>

    <!-- Include puzzle scripts -->
    <script type="text/javascript" src="javascript/toothPuzzle.js"></script>
    <script type="text/javascript" src="javascript/keyboardPuzzle.js"></script>
    <script type="text/javascript" src="javascript/eyePuzzle.js"></script>

    <script type="text/javascript" src="javascript/LOSTPuzzle.js"></script>

    <script type="text/javascript" src="javascript/timer.js"></script>

  </head>
  <body>

    <div id="countdown-timer-up">
      test
    </div>

    <!-- The backdoor lights:
    Every time a requirement is met to open the backdoor, a light switches on.
  -->
  <div id="light_container">
    <div class="light" id="light1"></div>
    <div class="light" id="light2"></div>
    <div class="light" id="light3"></div>
  </div>

    <!-- The escape room timer -->
    <div id="timer_container">
      <div>Time left</div>
      <div id="timer">2:00</div>
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
        <div class="tooth" id="tooth1"></div>
        <div class="tooth" id="tooth2"></div>
        <div class="tooth" id="tooth3"></div>
        <div class="tooth" id="tooth4"></div>
        <div class="tooth" id="tooth5"></div>
        <div class="tooth" id="tooth6"></div>
        <div class="tooth" id="tooth7"></div>
        <div class="tooth" id="tooth8"></div>
        <div class="tooth" id="tooth9"></div>
        <div class="tooth" id="tooth10"></div>
      </div>

    </div>

    <div id="lostPuzzlePanel">
      <div id="arrowScreen">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80%" height="80%" viewBox="0 0 80 80" xml:space="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="0.2em" stroke-linecap="round" stroke-linejoin="round" points="
          0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </div>
      <div id="timerBar"></div>
    </div>

  </body>
</html>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>BEEZEE</title>
    <link rel="stylesheet" href="css/main.css">

    <!-- Include JQuery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Include JQuery Color -->
    <script
			  src="https://code.jquery.com/color/jquery.color-2.1.2.js"
			  integrity="sha256-1Cn7TdfHiMcEbTuku97ZRSGt2b3SvZftEIn68UMgHC8="
			  crossorigin="anonymous">
    </script>

    <!-- Include external scripts -->
    <script type="text/javascript" src="javascript/general.js"></script>
    <script type="text/javascript" src="javascript/tooth.js"></script>
  </head>
  <body>

    <!-- Create BEE_ZEE (the robot) -->
    <div id="beezee_container">

      <!-- FRAME eyes -->
      <div id="eyes_container">
        <a href="portal.php">
          <div id="left_eye">Left GG</div>
        </a>
        <div id="right_eye">Right</div>
      </div>

      <div id="timer_container">
        <div id="timer">2:00</div>
      </div>

      <!-- FRAME mouth -->
      <div id="mouth_container">
        <div class="tooth toothA" id="tooth1"></div>
        <div class="tooth" id="tooth2"></div>
        <div class="tooth" id="tooth3"></div>
        <div class="tooth" id="tooth4"></div>
        <div class="tooth" id="tooth5"></div>
        <div class="tooth" id="tooth6"></div>
        <div class="tooth" id="tooth7"></div>
        <div class="tooth" id="tooth8"></div>
      </div>

    </div>

  </body>
</html>

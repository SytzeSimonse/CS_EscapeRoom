<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Start</title>
    <link rel="stylesheet" href="css/start.css">

    <!-- Include JQuery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Include external scripts -->
    <script src="javascript/start.js"></script>
  </head>
  <body>

    <div id="instruction_container">
      Welcome to the Computer Science EscapeRoom!
      Before starting the adventure, please read the instructions below carefully.
      <ul>
        <li>Enable fullscreen mode (press F11)</li>
        <li>Use Firefox or Chrome as browser</li>
        <li>Set a duration by adjusting the slider (default: 60 minutes)</li>
      </ul>
      Once you have read the instructions, click on the 'Start!'-button to begin the game.
      <br><br>
      <form class="" action="Stage-1/game.php" method="post" onsubmit="checkReady(event);">
        Duration (in minutes):<br>
        <input type="range" name="duration" step="5" min="30" max="90" value="60" onchange="updateDurationValue(this.value);"><br>
        <input type="text" id="durationValue" value=""><br><br>
        <input type="submit" value="Start!"/>
      </form>
    </div>

  </body>
</html>

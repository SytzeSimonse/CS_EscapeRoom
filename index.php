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
        <li>Enable fullscreen mode</li>
        <li>Set a duration (default: 45 minutes)</li>
      </ul>
      <form class="" action="login.php" method="post">
        Duration (in minutes):<br>
        <input type="range" name="duration" min="30" max="90" value="45">
      </form>
    </div>

    Nothing...
  </body>
</html>

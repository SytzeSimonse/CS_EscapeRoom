<?php

$_SESSION['portalAccessed'] = false;

// if ($_SESSION['portalAccessed']) {
//   echo "portal.php";
// } else {
//   header('Location: Stage-1/game.php');
// }

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Portal</title>

    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/portal.css">

    <!-- Include JQuery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script type="text/javascript" src="../javascript/timer.js"></script>

    <script>
    var duration_seconds = <?php echo $_POST["duration_seconds"]; ?>;
    var duration_minutes = <?php echo $_POST["duration_minutes"]; ?>;

      function load() {
          console.log("Load function.");
          alert("Seconds: "+duration_seconds+", Minutes: "+duration_minutes);

          stopwatch = new Stopwatch({
          'element': $('#timer'),// DOM element
          'paused': false,                    // Status
          'elapsed': 1000 * 60 * duration_minutes + duration_seconds * 1000,          // Current time in milliseconds
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
          }
        });
      }

      window.onload = load;
    </script>

  </head>
  <body>

    <!-- The escape room timer -->
    <div id="timer_container">
      <div>Time left</div>
      <div id="timer"></div>
    </div>

    <!-- Login to portal -->
    <div id="login-portal_container">
      <div id="loginText">
        Welcome, human! Via this portal you can access the administration page of <em>BEEZEE-2000</em>.
        Please enter your username and password. It is not possible to create a new account.
        Only existing users are provided access.
      </div>
      <!-- Login form -->
      <form action="login.php" method="post">
        <b>Username:</b></br>
        <!-- <select name="dbType">
          <option>Choose Database Type</option>
          <option value="oracle">Oracle</option>
          <option value="mssql">MS SQL</option>
          <option value="mysql">MySQL</option>
          <option value="other">Other</option>
        </select> -->
        <input type="text" name="username" required><br>
        <b>Password:</b></br>
        <input type="text" name="password" required><br><br>
        <input type="submit" name="submit" value="Login!">
      </form>

      <div id="forgotPassword">
        <a href="#" onclick="alert('Too bad! For security reasons, we cannot provide you a new password.')">
          <em>I forgot my password.</em>
        </a>
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

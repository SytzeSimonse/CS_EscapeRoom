<?php

session_start();

$_SESSION['loggedIn'] = false;

$_SESSION['duration_seconds'] = $_POST["duration_seconds"];
$_SESSION['duration_minutes'] = $_POST["duration_minutes"];

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Login portal</title>
</head>
<body>
  <?php
  // Check if password is correct.
  if (1==1) {

    if ($_POST['username'] = "' or ''='" && $_POST['password'] = "' or ''='") {
      echo "Login succesfull.";

      $_SESSION['loggedIn'] = true;

      // Wait 4 seconds before redirecting to administration page.
      header("Refresh: 4; url=../Stage-3/administration.php");
    }

    // Define variables.
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = "users_db";

    // Create connection
    $conn = new mysqli($servername,$username,$password,$dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Verbinding met DB niet gelukt: ".$conn->connect_error);
    }

    // Make query.
    $query = "SELECT username, password
    FROM users
    WHERE username = '".$_POST['username']."'
    and password = '".$_POST['password']."'";
    $result = mysqli_query($conn,$query);

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        echo "Login succesfull.";

        $_SESSION['loggedIn'] = true;

        // Wait 4 seconds before redirecting to administration page.
        header("Refresh: 4; url=../Stage-3/administration.php");
      }
    } else {
      echo "
      <!DOCTYPE html>
      <html lang='en' dir='ltr'>
        <head>
          <meta charset='utf-8'>
          <title>Failed login</title>
          <link rel='stylesheet' href='css/portal.css'>
        </head>
        <body>

          Login unsuccesfull... You will be directed back to the login portal.

        </body>
      </html>
      ";

      // Wait 4 seconds before redirecting to login portal.
      header("Refresh: 4; url=portal.php");
    }
    $conn->close();
  }
  ?>
</body>
</html>

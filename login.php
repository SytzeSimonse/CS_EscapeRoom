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
      }
    } else {
      echo "Login unsuccessfull.";
    }
    $conn->close();
  }

  ?>
</body>
</html>

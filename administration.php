<?php

if ($_SESSION['loggedIn']) {
  echo "administration page";
} else {
  header('Location: portal.php');
}

?>

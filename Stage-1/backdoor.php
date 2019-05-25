<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Login portal</title>
</head>
<body>
  <?php
      echo "
      <!DOCTYPE html>
      <html lang='en' dir='ltr'>
        <head>
          <meta charset='utf-8'>
          <title>Failed login</title>
          <link rel='stylesheet' href='css/portal.css'>
        </head>
        <body>

          ERROR

        </body>
      </html>
      ";

      // Wait 4 seconds before redirecting to login portal.
      header("Refresh: 4; url=portal.php");
  ?>
</body>
</html>

<?php

session_start();

if ($_SESSION['loggedIn']) {
  //
} else {
  // Redirect back to portal.
  header('Location: portal.php');
}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Portal</title>

  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/portal.css">
  <link rel="stylesheet" href="../css/administration.css">

  <!-- Include JQuery -->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <script type="text/javascript" src="../javascript/timer.js"></script>
  <script type="text/javascript" src="../javascript/end.js"></script>

  <script>
  var duration_seconds = <?php echo $_SESSION["duration_seconds"]; ?>;
  var duration_minutes = <?php echo $_SESSION["duration_minutes"]; ?>;

  function load() {
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
    <div id="timer_header">Time left</div>
    <div id="timer"></div>
  </div>

  <div id="administration_container">

    <div id="end-message_container">
      <p>Congratulations, you have successfully escaped the room!</p>
      <p><a href="#">Return</a></p>
    </div>

    <h1>ADMINISTRATION</h1>
    <p>In the administration page the configurations of BEEZEE can be managed. Please be careful with altering, adding and deleting configurations. There is a maximum of 64 configurations. <i>Adding more will overwrite other configurations.</i></p>
    <br>

    <div style="height:10em; overflow:auto;">
      <table id="table1" border="1">
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Value</th>
          <th>Delete</th>
          <th>Add Rows</th>
        </tr>

        <!-- Fake configs. -->
        <tr>
          <td class="tbl_id">1</td>
          <td><input disabled="true" type="text" name="tm1[]" value="ASIMOV_LAW1"/></td>
          <td><input disabled="true" type="text" name="nm2[]" value="True"/></td>
          <td><input disabled="true" type="button" value="Delete" onclick="ob_adRows.delRow(this)"/></td>
          <td><input type="button" value="Add Row" onclick="ob_adRows.addRow(this)"/></td>
        </tr>
        <tr>
          <td class="tbl_id">2</td>
          <td><input disabled="true" type="text" name="tm1[]" value="ASIMOV_LAW2"/></td>
          <td><input disabled="true" type="text" name="nm2[]" value="True"/></td>
          <td><input disabled="true" type="button" value="Delete" onclick="ob_adRows.delRow(this)"/></td>
          <td><input type="button" value="Add Row" onclick="ob_adRows.addRow(this)"/></td>
        </tr>
        <tr>
          <td class="tbl_id">3</td>
          <td><input disabled="true" type="text" name="tm1[]" value="ASIMOV_LAW3"/></td>
          <td><input disabled="true" type="text" name="nm2[]" value="True"/></td>
          <td><input disabled="true" type="button" value="Delete" onclick="ob_adRows.delRow(this)"/></td>
          <td><input type="button" value="Add Row" onclick="ob_adRows.addRow(this)"/></td>
        </tr>
        <!-- End of fake configs. -->

        <tr>
          <td class="tbl_id">4</td>
          <td><input type="text" id="field1" name="tm1[]" required/></td>
          <td><input type="text" id="field2" name="nm2[]" required/></td>
          <td><input type="button" value="Delete" onclick="ob_adRows.delRow(this)"/></td>
          <td><input type="button" value="Add Row" onclick="ob_adRows.addRow(this)"/></td>
        </tr>
      </table>
    </div>

    <br><br>

    <div><input type="button" value="Add Row at end" onclick="ob_adRows.addRow()"/></div>
  </div>

  <script>
  //JS class to add/delete rows in html table - https://coursesweb.net/javascript/
  //receives table id
  function adRowsTable(id){
    var table = document.getElementById(id);
    var me = this;
    if(document.getElementById(id)){
      var row1 = table.rows[4].outerHTML;

      //adds index-id in cols with class .tbl_id
      function setIds(){
        var tbl_id = document.querySelectorAll('#'+ id +' .tbl_id');
        for(var i=0; i<tbl_id.length; i++) tbl_id[i].innerHTML = i+1;
      }

      //add row after clicked row; receives clicked button in row
      me.addRow = function(btn){
        if (count()) {
          btn ? btn.parentNode.parentNode.insertAdjacentHTML('afterend', row1): table.insertAdjacentHTML('beforeend',row1);
          setIds();
        } else {
          end();
        }
      }

      //delete clicked row; receives clicked button in row
      me.delRow = function(btn){
        btn.parentNode.parentNode.outerHTML ='';
        setIds();
      }
    }
  }

  //create object of adRowsTable(), pass the table id
  var ob_adRows = new adRowsTable('table1');

  function count() {
    var count = $('#table1 tr').length - 1;

    if (count >= 7) {
      var answer = confirm("Adding this configuration will result in overwriting the first configuration. Are you sure you want to continue?");
      if (!answer) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }

  }
</script>

</body>
</html>

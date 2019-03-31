/******************
 * STOPWATCH CLASS
 Used as timer.
 *****************/

function Stopwatch(config) {
  // If no config is passed, create an empty set
  config = config || {};
  // Set the options (passed or default)
  this.element = config.element || {};
  this.previousTime = config.previousTime || new Date().getTime();
  this.paused = config.paused && true;
  this.elapsed = config.elapsed || 0;
  this.countingUp = config.countingUp && true;
  this.timeLimit = config.timeLimit || (this.countingUp ? 60 * 10 : 0);
  this.updateRate = config.updateRate || 100;
  this.onTimeUp = config.onTimeUp || function() {
    this.stop();
  };
  this.onTimeUpdate = config.onTimeUpdate || function() {
    console.log(this.elapsed)
  };
  if (!this.paused) {
    this.start();
  }
}


Stopwatch.prototype.start = function() {
  // Unlock the timer
  this.paused = false;
  // Update the current time
  this.previousTime = new Date().getTime();
  // Launch the counter
  this.keepCounting();
};

Stopwatch.prototype.keepCounting = function() {
  // Lock the timer if paused
  if (this.paused) {
    return true;
  }
  // Get the current time
  var now = new Date().getTime();
  // Calculate the time difference from last check and add/substract it to 'elapsed'
  var diff = (now - this.previousTime);
  if (!this.countingUp) {
    diff = -diff;
  }
  this.elapsed = this.elapsed + diff;
  // Update the time
  this.previousTime = now;
  // Execute the callback for the update
  this.onTimeUpdate();
  // If we hit the time limit, stop and execute the callback for time up
  if ((this.elapsed >= this.timeLimit && this.countingUp) || (this.elapsed <= this.timeLimit && !this.countingUp)) {
    this.stop();
    this.onTimeUp();
    return true;
  }
  // Execute that again in 'updateRate' milliseconds
  var that = this;
  setTimeout(function() {
    that.keepCounting();
  }, this.updateRate);
};

Stopwatch.prototype.stop = function() {
  // Change the status
  this.paused = true;
};

Stopwatch.prototype.subtract = function(seconds) {
  // Subtract time from elapsed.
  this.elapsed = this.elapsed - (seconds * 1000);
  this.element.animate({opacity:0.2},200,"linear",function(){
    $(this).animate({opacity:1},200);
  });
  new Audio("resources/error.wav").play();
}

let stopwatch;

$(document).ready(function() {
  /*
   * Second example, producing 1 counter (counting up to 6 seconds)
   */
  stopwatch = new Stopwatch({
    'element': $('#timer'),// DOM element
    'paused': false,                    // Status
    'elapsed': 1000 * 60 * 60,          // Current time in milliseconds
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
});

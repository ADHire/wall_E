// Start of object constructor for our rover
function Rover(pos, dir) {
  rover = this;
  this.pos = pos;
  this.dir = dir;
  this.command = function(commands) {

    var commandList = commands.split('');

    commandList.forEach(function(command) {
      if(command === 'f' || command === 'b') {
        movement(command);
      } else if(command === 'r' || command === 'l') {
        turning(command);
      };
    });

  };


  // Movement functionality

  function movement(command) {

    var xAxis = 0;
    var yAxis = 0;

    if(rover.dir === 'north') {
      yAxis  = 1;
    } else if(rover.dir === 'south') {
      yAxis = -1;
    } else if(rover.dir === 'west') {
      xAxis = -1;
    } else if(rover.dir === 'east') {
      xAxis = +1;
    }

    if(command === 'b') {
      yAxis *= -1;
      xAxis *= -1;
    }

    rover.pos[0] += xAxis;
    rover.pos[1] += yAxis;

  }



  // Turning functionality

  function turning(command) {

    var rightTurn = command === 'r';
    var leftTurn = command === 'l';
    var northFace = rover.dir === 'north';
    var eastFace = rover.dir === 'east';
    var southFace = rover.dir === 'south';
    var westFace = rover.dir === 'west';

    // I feel like a switch statement could be in order? I don't want to spend too much time refactoring this at the moment. Will revisit if I have time.
    if(rightTurn && northFace) {
      rover.dir = 'east';
    } else if(rightTurn && eastFace) {
      rover.dir = 'south';
    } else if(rightTurn && southFace) {
      rover.dir = 'west';
    } else if(rightTurn && westFace) {
      rover.dir = 'north';
    };

    // Note to self: see line 59
    if(leftTurn && northFace) {
      rover.dir = 'west';
    } else if(leftTurn && eastFace) {
      rover.dir = 'north';
    } else if(leftTurn && southFace) {
      rover.dir = 'east';
    } else if(leftTurn && westFace) {
      rover.dir = 'south';
    };

  }

};



// Creation/tests
var wall_E = new Rover([0, 0], 'north');





// Messing around with dynamically creating an object via inputs
// Creates a new rover via three initial inputs on page
var newRover;

function create() {

  var defPosOne = Number(document.getElementById('posOne').value);
  var defPosTwo = Number(document.getElementById('posTwo').value);
  var defPos = [defPosOne, defPosTwo];
  var defDir = document.getElementById('dir').value.toLowerCase();

  newRover = new Rover(defPos, defDir);

  var outPutInfo = 'Your rover is at ' + newRover.pos[0] + ', ' + newRover.pos[1] + ' facing ' + newRover.dir;
  var roverEl = document.getElementById('roverData');

  roverEl.innerText = outPutInfo;

  document.getElementById('initForm').style.display = 'none';
  document.getElementById('commForm').removeAttribute('class', 'hidden');

  reset();

}

// Allows user to input commands to move the rover
function commandRover() {

  var defCommands = document.getElementById('commands').value.toLowerCase();

  newRover.command(defCommands);

  var outPutInfoTwo = 'Your rover has moved to ' + newRover.pos[0] + ', ' + newRover.pos[1] + ' facing ' + newRover.dir;
  var roverElTwo = document.getElementById('updatedRover');

  roverElTwo.innerText = outPutInfoTwo;

  document.getElementById('roverData').setAttribute('class', 'hidden');

  reset();

}


// Resets input fields
function reset() {

  var defPosOne = document.getElementById('posOne').value = '';
  var defPosTwo = document.getElementById('posTwo').value = '';
  var defDir = document.getElementById('dir').value = '';
  var defCommands = document.getElementById('commands').value = '';

}

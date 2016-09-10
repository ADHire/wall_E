// Start of object constructor for our rover

function Rover(pos, dir) {

  rover = this;

  // Assigns our rover's position

  this.pos = pos;

  // Assigns our rover's direction

  this.dir = dir;

  // Function to accept an array of commands and run the rover's commands

  this.command = function(commands) {

    var commandList = commands.toString('');

    for(var i = 0; i < commandList.length; i++) {

      var command = commandList.charAt(i);

      if(command === 'f' || command === 'b') {
        rover.movement(command);
      } else if(command === 'r' || command === 'l') {
        rover.turning(command);
      }
      
    };

  }

  // Created an array for the obstacle. Code to randomize a location is below

  this.obstacle = [];

  // Randomly selecting obstacles
  rover.obstacle[0] = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  rover.obstacle[1] = Math.floor(Math.random() * (2 - 0 + 1)) + 0;


  // Movement functionality

  this.movement = function(command) {

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

    rover.obstacleCheck();

  }

  // Turning functionality

  this.turning = function(command) {

    var rightTurn = command === 'r';
    var leftTurn = command === 'l';
    var northFace = rover.dir === 'north';
    var eastFace = rover.dir === 'east';
    var southFace = rover.dir === 'south';
    var westFace = rover.dir === 'west';

    if(rightTurn && northFace) {
      rover.dir = 'east';
    } else if(rightTurn && eastFace) {
      rover.dir = 'south';
    } else if(rightTurn && southFace) {
      rover.dir = 'west';
    } else if(rightTurn && westFace) {
      rover.dir = 'north';
    };

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

  // Obstacle check functionality

  this.obstacleCheck = function() {

    if(rover.obstacle.toString() === rover.pos.toString()) {
      console.log('An obstacle has been found. Please find another route.');
      rover.movement('b');
    }

  }


}; // End of object constructor


// Creation/tests
var wall_E = new Rover([0, 0], 'north');

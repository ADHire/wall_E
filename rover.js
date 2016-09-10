// Start of object prototype for our rover

function Rover(pos, dir) {

  rover = this;

  // Assigns our rover's position

  this.pos = pos || [0, 0];

  // Assigns our rover's direction

  this.dir = dir || 'n';

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

    }

  };

  // Created an array for the obstacle. Code to randomize a location is below

  this.obstacle = [ (Math.floor(Math.random() * (10 - 0) + 1)), (Math.floor(Math.random() * (10 - 0) + 1)) ];

  // Created a victory point

  this.victory = [ (Math.floor(Math.random() * (10 - 0) + 1)), (Math.floor(Math.random() * (10 - 0) + 1))  ];

  // Movement functionality

  this.movement = function(command) {

    var xAxis = 0;
    var yAxis = 0;

    if(rover.dir === 'n') {
      yAxis  = 1;
    } else if(rover.dir === 's') {
      yAxis = -1;
    } else if(rover.dir === 'w') {
      xAxis = -1;
    } else if(rover.dir === 'e') {
      xAxis = +1;
    }

    if(command === 'b') {
      yAxis *= -1;
      xAxis *= -1;
    }

    rover.pos[0] += xAxis;
    rover.pos[1] += yAxis;

    rover.scramble();
    rover.obstacleCheck();
    rover.victoryCheck();

    console.log('Wall_E is now at ' + '[' + rover.pos[0] + ', ' + rover.pos[1] + ']' + ' facing ' + rover.dir);

  };

  // Turning functionality

  this.turning = function(command) {

    var rightTurn = command === 'r';
    var leftTurn = command === 'l';
    var northFace = rover.dir === 'n';
    var eastFace = rover.dir === 'e';
    var southFace = rover.dir === 's';
    var westFace = rover.dir === 'w';

    if(rightTurn && northFace) {
      rover.dir = 'e';
    } else if(rightTurn && eastFace) {
      rover.dir = 's';
    } else if(rightTurn && southFace) {
      rover.dir = 'w';
    } else if(rightTurn && westFace) {
      rover.dir = 'n';
    }

    if(leftTurn && northFace) {
      rover.dir = 'w';
    } else if(leftTurn && eastFace) {
      rover.dir = 'n';
    } else if(leftTurn && southFace) {
      rover.dir = 'e';
    } else if(leftTurn && westFace) {
      rover.dir = 's';
    }

    console.log('Wall_E is now facing ' + rover.dir);

  };

  // Obstacle check functionality

  this.obstacleCheck = function() {

    if(rover.obstacle.toString() === rover.pos.toString()) {
      alert('An obstacle has been found. Please find another route.');
      rover.movement('b');
    }

  };

  // Victory check functionality

  this.victoryCheck = function() {

    if(rover.victory.toString() === rover.pos.toString()) {
      alert('You have found EVE!');
    }

  };

  // Scrambles the victory coordinates if they match the obstacle coordinates

  this.scramble = function() {

    if(rover.victory.toString() === rover.obstacle.toString()) {
      rover.victory = [ (Math.floor(Math.random() * (10 - 0) + 1)), (Math.floor(Math.random() * (10 - 0) + 1))  ];
    }

  };

} // End of object prototype

// Start of object prototype for our rover

function Rover(pos, dir) {

  rover = this;

  // Assigns our rover's position
  this.pos = pos || [0, 0];

  // Assigns our rover's direction
  this.dir = dir || 'n';

  // Max grid size allowed currently
  this.gridX = [-20, 20];
  this.gridY = [-20, 20];

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

    var northFace = rover.dir === 'n';
    var eastFace = rover.dir === 'e';
    var southFace = rover.dir === 's';
    var westFace = rover.dir === 'w';

    if(northFace) {
      yAxis = 1;
    } else if(southFace) {
      yAxis = -1;
    } else if(westFace) {
      xAxis = -1;
    } else if(eastFace) {
      xAxis = 1;
    }

    if(command === 'b') {
      yAxis *= -1;
      xAxis *= -1;
    }

    rover.pos[0] += xAxis;
    rover.pos[1] += yAxis;

    rover.wrap();
    rover.scramble();
    rover.obstacleCheck();
    rover.victoryCheck();

    console.log('Wall_E is now at ' + '[' + rover.pos[0] + ', ' + rover.pos[1] + ']' + ' facing ' + rover.dir);

  }; // End of Movement

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

  }; // End of Turning

  // Obstacle check functionality
  this.obstacleCheck = function() {

    var counter = 0;

    for(var i = 0; i < rover.pos.length; i++) {

      for(var k = 0; k < rover.obstacle.length; k++) {

        if(rover.pos[i] === rover.obstacle[k]) {
          counter ++;
        }

      }
    }

    if(counter === 2) {
      console.log('fall back brotha!');

    }
  }; // End of Obstacle

  // Victory check functionality
  this.victoryCheck = function() {

    var counter = 0;

    for(var i = 0; i < rover.pos.length; i++) {

      for(var k = 0; k < rover.victory.length; k++) {

        if(rover.pos[i] === rover.victory[k]) {
          counter ++;
        }

      }
    }

    if(counter === 2) {
      console.log('You have found Eve!!!');

    }
  }; // End of Victory

  // Scrambles the victory coordinates if they match the obstacle coordinates
  this.scramble = function() {

    var counter = 0;

    for(var i = 0; i < rover.obstacle.length; i++) {

      for(var k = 0; k < rover.victory.length; k++) {

        if(rover.obstacle[i] === rover.victory[k]) {
          counter ++;
        }

      }
    }

    if(counter === 2) {
      rover.victory = [ (Math.floor(Math.random() * (10 - 0) + 1)), (Math.floor(Math.random() * (10 - 0) + 1))  ];
    }

  }; // End of Scramble

  // 'Wrapping'? I think? Hard to wrap a square grid on a sphere.
  this.wrap = function() {

    if(rover.pos[0] > rover.gridX[1] && rover.dir === 'e') {
      rover.pos[0] = rover.gridX[0];
    } else if(rover.pos[0] > rover.gridX[1] && rover.dir === 'w') {
      rover.pos[0] = rover.gridX[0];
    } else if(rover.pos[0] < rover.gridX[0] && rover.dir === 'w') {
      rover.pos[0] = rover.gridX[1];
    } else if(rover.pos[0] < rover.gridX[0] && rover.dir === 'e') {
      rover.pos[0] = rover.gridX[1];
    }

    if(rover.pos[1] > rover.gridY[1] && rover.dir === 'n') {
      rover.pos[1] = rover.gridY[0];
    } else if(rover.pos[1] > rover.gridY[1] && rover.dir === 's') {
      rover.pos[1] = rover.gridY[0];
    } else if(rover.pos[1] < rover.gridY[0] && rover.dir === 's') {
      rover.pos[1] = rover.gridY[1];
    } else if(rover.pos[1] < rover.gridY[0] && rover.dir === 'n') {
      rover.pos[1] = rover.gridY[1];
    }

  };

  console.log(rover.obstacle);
  console.log(rover.victory);
  console.log(rover.pos);

} // End of object prototype

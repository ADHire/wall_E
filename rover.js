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
  this.obstacle = [];


  // Movement functionality

  function movement(command) {

    obstacleCheck();

    console.log('moving ' + command);

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

    console.log('turning ' + command);

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

  // Randomly selecting obstacles
  rover.obstacle[0] = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  rover.obstacle[1] = Math.floor(Math.random() * (10 - 0 + 1)) + 0;


  // Obstacle check function -- not exactly working at the moment
  function obstacleCheck() {

    console.log('checking for obstacles');
    console.log(rover.obstacle);
    console.log(rover.pos);

    if(rover.pos[0] && rover.pos[1] === rover.obstacle[0] && rover.obstacle[1]) {
      console.log('An obstacle has been found');
    } else {
      console.log('Free to move forward');
    }

  }


};

// Creation/tests
var wall_E = new Rover([0, 0], 'north');
rover.command('f');
console.log(wall_E.pos + ' ' + wall_E.dir);

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

    rover.pos[0] += xAxis;
    rover.pos[1] += yAxis;

  }


  // Turning functionality

  function turning(command) {

    console.log('turning ' + command);

  }

};

var wall_E = new Rover([0, 0], 'north');
rover.command('ff');
console.log(wall_E.pos);

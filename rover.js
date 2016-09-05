// Start of object constructor for our rover

function Rover(pos, dir) {
  rover = this;
  this.pos = pos;
  this.dir = dir;
  this.command = function(commands) {

    var commandList = commands.split(', ');

    commandList.forEach(function(command) {
      if(command === 'f' || command === 'b') {
        movement(command); // Need to make this function
      } else if(command === 'r' || command === 'l') {
        turning(command); // Need to make this function
      };
    });

  };


};

var wall_E = new Rover([0, 0], 'north');

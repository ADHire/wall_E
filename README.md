# wall_E

This allows users to create a rover with an initial location and a direction.

Example of creation:

```javascript
var wall_E = new Rover([0, 0], 'n');
```


To move the rover around, you would access the command function. There are four commands
--* Forward = 'f'
--* Back = 'b'
--* Right = 'r'
--* left = 'l'

Example of moving:

```javascript
wall_E.command(['ffrff']);
```

This will move the robot forward twice, make a right turn, and move it forward twice more.


As you move, your console will display the rovers coordinates and position.
If you encounter an obstacle, the rover will back up and you will need to pass it new commands.
If you find the victory point, you will receive an alert.


My next step will be to tie in a front-end for users to input information via input elements.

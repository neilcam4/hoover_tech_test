# Imaginery Robotic Hoover

This is a program that navigates an imaginer robotic hoover around a square room based on the following:

`User Stories`

● Room dimensions as ​X and Y coordinates​, identifying the top right corner of the room rectangle.  

● The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.

● This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions.


● Locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.


● An initial hoover position (X and Y coordinates like patches of dirt)


● Driving instructions (as ​cardinal directions​) where e.g. N and E mean "go north"
and "go east" respectively).

● Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

`Goal`

● To design a programme that will take the instructions above as the input (in a .txt file) and deliver this output:

  ● The final hoover position
  
  ● The number of patches of dirt the hoover sucked up.

## Set Up Instructions

In github, clone the repository.

In command line, type git clone and the cloned github url.

Run npm install http-server. Run http-server, copy server url  and paste into browser. 

Click on 'browse' and choose input.txt

Click on 'Start Hoovering' button.

Output will appear in console. The top line represents the final coordinates of the hoover. The second line represents the number of dirt patches the hoover has cleaned up. 

`Screenshot of Jasmine Test Suite for Hoover App`
![Tests](https://github.com/neilcam4/hoover_tech_test/blob/master/HooverTests.png "Tests")

`Screenshot of Hoover App with Output`


![Output](https://github.com/neilcam4/hoover_tech_test/blob/master/hoover_app.png "Output")


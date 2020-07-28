# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | Complete
|Dec 18th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 18th| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 18th| Pseudocode / actual code | Complete
|Dec 18th| Initial Clickable Model  | Complete
|Dec 19th| MVP | complete
|Dec 21st| Present | Complete


## Project Description

The player will be a square. Your goal is to go through the obstacles of jumping over enemy squares. If you hit the enemy squares you will have to restart the level. You will have one key only and it is the up arrow key. You will use it to jump over the enemy squares and get along the map.

## Wireframes

https://codeandcry.imgur.com/all

## Priority Matrix

https://imgur.com/tf37BTp

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
1. Making the map
2. Making character model
3. Making enemy models and classing them
4. Making function to increment character position
5. Using set interval to run over time
6. Jump functionality
7. Collision detection

MVP is to get square to jump over 1 enemy square with collision detection.

#### PostMVP 

8. Add platforms
9. Make squares into triangles
10. Speed up the character past a certain point

## Functional Components

### Landing Page
The landing page will consist of a big title with the games name(Possible Game). This will all be in a H1 element. The title will be centered, and under that you will have a play now button where you will be able to click, then that will take you into the game itself.

### Game Initialization
After clicking play now you will be directed to a brand new page, and you will automatically start your game.

### Playing The Game 
The game will start with the player, which is a square in this case... Will be moving automatically to the right,by applying setInterval to run a fucntion over time and this in this function i will be incrementing pixels from the players current left margin till the end. You will be able to jump with the arrow key, and that will be applied with keyUp. Lastly if you hit any of the enemies you will die and have to restart. I will do this by using collision detection.

### Winning The Game

In order to win the game, you must get through the obstacles, and reach a "door" in this case it will be a div, and when it detects that they have collided you will be alerted "you win!!"

### Resetting The Game

I will have a replay button that when you click it, it will run the function of recreating all other functions, of recreating character, maps, enemies, and make it ready for a new play.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 3hrs| 4hrs | 4hrs |
| Creating characters, enemies, and map | H | 1hrs| 1hr | 1hr |
| Moving character units and applying set interval | H | 3hrs| 5hrs | 5hrs |
| Collision Detection | H | 5hrs| 3hrs | 3hrs |
| Styling and Effects | L | 3hrs| 2hrs | 2hrs |
| Total | - | 15hrs| 15hrs | 15hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

I will be having helper functions to create elements for my enemy squares. Another helper function to detect collision, and the third one will be a logical one to make sure nothing leaves the map.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

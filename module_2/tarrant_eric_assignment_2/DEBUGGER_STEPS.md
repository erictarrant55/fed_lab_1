__author__ = "Eric Tarrant"
__version__ = "1.0.0"

# Debugging Analysis

## Breakpoint 1

I put a breakpoint on line 209:

const state = story[currentState];

It is an important breakpoint because the game determines which part of the story should be displayed. When the debugger stopped, the program had entered the renderQuestion function. I used Step Over to move to the following line of code. The program continued to display the story text on screen.

## Breakpoint 2

I put a breakpoint on line 253:

currentState = nextState;

I put the breakpoint there because in this part of the program it changes the story state based on whatever choice the player has made. Before I stepped over the line, the debugger paused at this line. currentState contained the previous location and the nextState contained a new location that was select by the player. After that I stepped over the line and currentState change to next State. This shows the players choice had a successfully change of direction.

## Breakpoint 3

The last breakpoint is at line 211:

questionElement.textContent = state.text;

I used the step over to execute the code above. The debugger then moved to the if (state.choices.length === 0). This shows that the story text has been confirmed and was successfully assigned to the question element as well the program continued to check if there are any choices remaining.

__author__ = "Eric Tarrant"
__version__ = "1.0.0"

## Breakpoints

# Breakpoint 1

The first breakpoint is at line 9:
const container = document.getElementById("Container");

This is my first breakpoint because I needed to see if the function was properly running when the button was clicked. The debugger stopped on the container variable showing div#Container (As seen in the second screenshot for breakpoint 1, It got cut out of the first screenshot) that it was found successfully html container. Then I stepped over to the next line of 11, then once again to the line of the API url which shows that program is ready to send the api data.

# Breakpoint 2

The second breakpoints happens at line 24:
console.log("API data:", cycling);

This was a breakpoint because I needed to make sure that the API returned the information to my program. The debugger stopped on that line and seen the scope panel is a list of {...} being the cycling routes (Seen in the first screenshot of breakpoint 2). I then stepped over to the next line, the program then checks if the returned data is an array and is not empty. This shows that the API successfully returned the data.

# Breakpoint 3

The last breakpoint was put on line 32:
const route = cycling[randomIndex];

I put my last breakpoint there because that is where the program finds and selects a cycling route. I inspected the randomIndex to see what the position in the array was selected. I stepped over to then execute the line and create the route variable. I then looked through the select route and the properties of it such as infrastructure_type. Then stepped through one last time This all shows that the program found a random route.

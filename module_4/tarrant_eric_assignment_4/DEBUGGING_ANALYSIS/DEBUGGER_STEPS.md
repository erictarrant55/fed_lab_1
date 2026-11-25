__author__ = "Eric Tarrant"
__version__ = "1.0.0"

## Breakpoints

# Breakpoint 1

The first break point was on line 29:
const response = await fetch(url);

This was my first breakpoint because it is the last point before the API gets called to the program. The debugger stopped the program while inside the searchRoutes function which happens by the click of the search button. I put a random letter ("e") in just to make it trigger. The response showed "value unavailable" because they did not have a value yet. Then I stepped over and the debugger moved to line 30, the check for response.ok, and response now held a Response object from the API.

# Breakpoint 2

The second breakpoint is at line 37:
if (routes.length === 0)

At this point the API data has been turned into an array by response.json(). When the debugger stopped, routes was an array of 100 items, which matches the $limit=100 in my url. I used Step Over and the debugger moved to the for loop on line 41 instead of the "no routes found" message, which means the search found results.

# Breakpoint 3

# Critical State Analysis

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

This is my second breakpoint because the API data had now been turned into an array by response.json(). Debugger stops, routes was an array of 100 items, which matches the $limit=100 in my url. I then stepped through and the debugger moved to the for loop on line 41 instead of the "no routes found" message, meaning that results were found.

# Breakpoint 3

My last breakpoint is at line 46:
tbody.appendChild(row);

This is my last breakpoint because this is the line that adds a row to the page. Debugger stops, the route was the current route object from the API and row was a document-fragment filled in with that route's data, however it is not in the table quite yet. Then I stepped over and the row was added to the table. The debugger then goes about to line 41.

# Critical State Analysis

For the critical state Analysis, I choose Breakpoint 2. It shows that the API data is an array of 100 objects, and each object has field names like infrastructure_type that match the data-field names in row template. The program is behaving as expected because the array has data and the program has moved into the loop. The 100 is the limit I set in the url, therefore a search like "e" since it is very short may have more matches than are shown.

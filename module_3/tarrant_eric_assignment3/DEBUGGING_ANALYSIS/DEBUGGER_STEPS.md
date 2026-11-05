# Breakpoint 1

For the first breakpoint I put at the beginning of the validate() function. I did this to examine the form submission before any validation happened. After pausing there, I stepped through and the hideAllErrors function was then executed. It hide any previous displayed error message.

# Breakpoint 2

For the second breakpoint I show the error for one of the radio button fieldsets: Drum shell brand. When none of the radio buttons are selected, it then raised the error of drumShellCheck = false (as seen in the first screenshot). Then once one of the radio buttons are checked off, it then steps through to drumShellCheck = True (as seen in the second screen shot).

# Breakpoint 3

For the last breakpoint, I show the regex validation for the email to make
sure the email input follows the correct formatted of email such as: <example@gmail.com>.
The first screenshot shows that it starts to check if the email that was inputted
but the user has a '@' as well as a period. If both of those qualities are met,
then it passes through to the next error set as seen in the second screenshot.

# Critical State

This is a critical state analysis for the first breakpoint.

1. What does this state tell you about your program's logic?

This state tells me that the form submission has been start but there is no validation has happened yet. hideAllErrors gets called by the program to hide an previous displayed error messages prior to starting a new validation check.

1. Is the program behaving as expected? Why or why not?

Yes it did behavior as I expected it to. It hide all previous errors messages therefore it follow it purpose as the hideAllErrors function.

1. How does this state connect to the program's next steps?

This connects to the program's next steps by checking for any invalid or missing information. Therefore if no errors are found, then the form can go to it's next steps and submit.

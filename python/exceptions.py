# To handle exceptions in Python we use the try and except blocks. The code that could potentially have an error is put in the try block. The program execution moves to the except block if an error happens. If there is no error, the code inside the except block will not run. We can also specify what type of error to catch and handle. This is done by adding an argument to the except block. In the example below, we catch a ValueError and a ZeroDivisionError. If the user enters a string instead of a number, a ValueError is raised. If the user tries to divide by 0, a ZeroDivisionError is raised. We also use the sys module to exit the program if an error occurs. This is done by calling the sys.exit() function and passing 1 as an argument. The argument is the exit code. An exit code of 0 means the program ran successfully. An exit code of 1 means an error occurred.

# sys is a module that provides access to some variables used or maintained by the interpreter and to functions that interact strongly with the interpreter. It is always available.  

import sys

try:
    x = int(input("x: "))
    y = int(input("y: "))
except ValueError:
    print("Error: Invalid input.")
    sys.exit(1)

try:
    result = x / y
except ZeroDivisionError:
    print("Error: Cannot divide by 0.")
    sys.exit(1)

print(f"{x} divided by {y} is {result}")
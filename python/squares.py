# Import the entire functions module from the functions.py file
import functions

for i in range(10 ):
    print(f"The square of {i} is {functions.square(i)}") # function

# Import just the function square from the functions.py file
from functions import square

for i in range(10 ):
    print(f"The square of {i} is {square(i)}") # function
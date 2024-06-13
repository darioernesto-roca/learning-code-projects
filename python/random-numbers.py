"""
Creating a program to write 100 random numbers to a text file
"""

import random

with open("random_numbers.txt", "w") as file:
    for i in range(100):
        file.write(str(random.randint(1, 100)) + "\n")
number = int(input("Number: ")) # int() function

if number > 0:
    print(f"{number} is positive") # if n is positive
elif number < 0:
    print(f"{number} is negative") # if n is negative
else:
    print(f"{number} is zero")
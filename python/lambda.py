# Lambda functions are small anonymous functions that are defined with the lambda keyword. They are syntactically restricted to a single expression. They can take any number of arguments, but can only have one expression. They are used when you need a short peace of code that you will only use once. Lambda functions are used in combination with the functions filter(), map(), sort() and reduce().

people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"},
]

# Sort by name function
# def f(person):
#     return person["name"]

#people.sort(key=f)

# Lambda function
people.sort(key=lambda person: person["name"])
people.sort(key=lambda person: person["house"])

print(people)

# Example with reduce
from functools import reduce

def f(x, y):
    return x + y

# Sum of all elements in the list
print(reduce(f, [1, 2, 3, 4, 5]))

# Output: 15
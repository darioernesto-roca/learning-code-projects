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

print(people)
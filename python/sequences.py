# List of sequences in Python

name = "Ernesto"

print(name[0]) # indexing
print(name[1]) # indexing
print(name[2]) # indexing
print(name[3]) # indexing
print(name[4]) # indexing
print(name[5]) # indexing
print(name[6]) # indexing

names = ["Alice", "Bob", "Charlie"] # list
print(names[0]) # indexing
print(names[1]) # indexing
print(names[2]) # indexing

names.append("David") # list
names.sort() # list

print(names) # list

# tuple
coordinateX = 10.0
coordinateY = 20.0

coordinates = (coordinateX, coordinateY) # tuple

print(coordinates[0]) # indexing
print(coordinates[1]) # indexing
print(coordinates) # tuple

# set
s = set()
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)

print(s)
print(f"The set has {len(s)} elements.")

s.remove(2)

print(s)
print(f"The set has {len(s)} elements.")

# dictionary
ages = {"Alice": 22, "Bob": 27} # dictionary
ages["Charlie"] = 30 # dictionary

print(ages["Alice"]) # accessing a dictionary
print(ages) # accessing a dictionary
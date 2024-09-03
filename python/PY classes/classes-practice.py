# Creating classes in python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def myfunc(self):
        print("Hello my name is " + self.name)

p1 = Person("John", 36)

print(p1.name) # John
print(p1.age) # 36
p1.myfunc() # Hello my name is John
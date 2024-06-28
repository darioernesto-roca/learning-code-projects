# Creating an object in Python

class Person:  
    def __init__(self, name, age):  
        self.name = name  
        self.age = age

    def greet(self):  
        print("Hello, my name is", self.name)

person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

person1.greet()
person2.greet()
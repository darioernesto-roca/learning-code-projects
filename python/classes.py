class Point():
    def __init__(self, input1, input2):
        self.x = input1
        self.y = input2

p = Point(2, 8)
print(p.x)
print(p.y)

class Flight():
    """
    A class representing a flight.

    Attributes:
    - capacity (int): The maximum number of passengers the flight can accommodate.
    - passengers (list): A list of passengers on the flight.

    Methods:
    - add_passenger(name): Adds a passenger to the flight.
    - open_seats(): Returns the number of available seats on the flight.
    """

    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        """
        Adds a passenger to the flight.

        Parameters:
        - name (str): The name of the passenger.

        Returns:
        - bool: True if the passenger was successfully added, False otherwise.
        """
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        """
        Returns the number of available seats on the flight.

        Returns:
        - int: The number of available seats.
        """
        return self.capacity - len(self.passengers)
    
flight = Flight(3)

people = ["Harry", "Ron", "Hermione", "Ginny"]
for person in people:
    if flight.add_passenger(person):
        print(f"Added {person} to flight successfully.")
    else:
        print(f"No available seats for {person}.")
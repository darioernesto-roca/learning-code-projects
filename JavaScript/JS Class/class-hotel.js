// I'm creating a room class that will be used in the hotel class, it should allow to add, remove the rooms, with number and price.

class Room {
    constructor(number, price) {
        this.number = number;
        this.price = price;
        this.available = true;
    }
    details() {
        console.log(`${this.number}: $${this.price} ${this.available ? 'Available' : 'Occupied'}`);
    }
    removeReservation() {
        this.available = false;
    }
}

class Hotel {
    static counterID = 0;
    constructor(name) {
        this.name = name;
        this.rooms = [];
        this.id = Hotel.counterID++;
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    removeRoom(room) {
        this.rooms = this.rooms.filter(r => r.number !== room.number);
    }
    showRooms() {
        console.log(`Rooms of ${this.name}`);
        this.rooms.forEach(room => room.details());
    }
}

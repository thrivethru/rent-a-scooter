const Scooter = require('./scooter');

class Station {
    static currentId = 0;
    static stations = [];
    
    constructor(location, capacity) {
        this.id = this.constructor.currentId++;
        this.location = location;
        this.capacity = capacity;
        this.scooters = [];
        this.constructor.stations = [...this.constructor.stations, this];
    }

    dockScooter(scooter) {
        // TODO: check open slots
        scooter.recharge(); // pseudo wait 2 hours
        this.scooters = [...this.scooters, scooter];
    }

    unDockScooter(scooterId) {
        this.scooters = this.scooters.filter(scooter => scooter.id != scooterID);
    }
}

module.exports = Station;
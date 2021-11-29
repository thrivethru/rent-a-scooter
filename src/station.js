import Scooter from './scooter.js';

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

    static listLocations() {
        return [...Station.stations];
    }

    static getStationById(stationId) {
        return Station.stations.find(station => station.id === stationId);
    }

    // Returns first scooter with available status, otherwise returns undefined
    getAvailableScooter() {
        return this.scooters.find(scooter => scooter.status === "Available");
    }

    getAvailableScooterCount() {
        return this.scooters.reduce((p, c) => c.isAvailable() ? p + 1 : p, 0);
    }

    checkVacancy() {
        return this.capacity - this.scooters.length;
    }

    dockScooter(scooterId) {
        if (this.checkVacancy() < 1) return `There are no spaces available to dock a scooter at ${this.location}`;
        const scooter = Scooter.getScooterById(scooterId);
        if (scooter) {
            scooter.recharge(); // pseudo wait 2 hours
            this.scooters = [...this.scooters, scooter];
            return `Docked scooter ${scooterId} at ${this.location}`;
        } else return `Unable to find scooter ${scooterId}`;
    }

    unDockScooter(scooterId) {
        // is scooter available?
        const scooter = this.scooters.find(scooter => scooter.id === scooterId);
        this.scooters = this.scooters.filter(scooter => scooter.id != scooterId);
        return scooter;
    }
}

export default Station;
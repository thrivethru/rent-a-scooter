class Scooter {
    static currentId = 0;
    static scooters = [];

    constructor(maxRange = 32) {
        this.id = this.constructor.currentId++;
        this.maxRange = maxRange;
        this.batteryLevel = 0;
        this.location = "GPS";
        this.status = "Maintenance";
        this.constructor.scooters = [...this.constructor.scooters, this];
    }

    static allScooters() {
        return [...Scooter.scooters];
    }
    
    static availableScooters() {
        return Scooter.scooters.filter(scooter => scooter.status === "Available");
    }

    static getScooterById(scooterId) {
        return Scooter.scooters.find(scooter => scooter.id === scooterId);
    }

    setStatus(status) {
        this.status = status;
    }

    isAvailable() {
        return this.status === "Available";
    }

    getLocation() {
        return this.location;
    }

    recharge() {
        // TODO: take 2 hours to charge to 100%
        this.batteryLevel = 100;
        this.setStatus("Available");
    }

    move(km) {
        // TODO: must be in rented status
        const batteryRequired = 100 / this.maxRange * km;
        if (batteryRequired <= this.batteryLevel) {
            this.batteryLevel = this.batteryLevel - batteryRequired;
        }
        // TODO: handle movement greater than possible with current battery level
    }
}

export default Scooter;
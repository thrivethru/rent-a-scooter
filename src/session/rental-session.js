import ScooterSession from './scooter-session.js';

class RentalSession extends ScooterSession {
    static rentalSessions = [];

    constructor(scooterId, userId, rentStationId, baseFee = 5.00, hourlyRate = 2.00) {
        super("Rental", scooterId, userId, rentStationId);
        this.baseFee = baseFee;
        this.hourlyRate = hourlyRate;
        this.constructor.rentalSessions = [...this.constructor.rentalSessions, this];
    }

    getCost() {
        const duration = super.getSessionDuration();
        if (duration <= 0) return this.baseFee;
        const hours = duration / 1000 / 60 / 60;
        return this.baseFee + (hours * this.hourlyRate);
    }
}

export default RentalSession;
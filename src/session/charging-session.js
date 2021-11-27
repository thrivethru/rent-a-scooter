import ScooterSession from './scooter-session.js';

class ChargingSession extends ScooterSession {
    static chargingSessions = [];

    constructor(scooterId, stationId) {
        super("Charging", scooterId, stationId, stationId);
        this.constructor.chargingSessions = [...this.constructor.chargingSessions, this];
    }
}

export default ChargingSession;
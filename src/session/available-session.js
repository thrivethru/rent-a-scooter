import ScooterSession from './scooter-session.js';

class AvailableSession extends ScooterSession {
    static availableSessions = [];

    constructor(scooterId, stationId) {
        super("Available", scooterId, stationId, stationId);
        this.constructor.availableSessions = [...this.constructor.availableSessions, this];
    }
}

export default AvailableSession;
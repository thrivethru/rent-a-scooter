import ScooterSession from './scooter-session.js';

class MaintenanceSession extends ScooterSession {
    static maintenanceSessions = [];

    constructor(scooterId, maintenanceId, stationId) {
        super("Maintenance", scooterId, maintenanceId, stationId);
        this.constructor.maintenanceSessions = [...this.constructor.maintenanceSessions, this];
    }
}

export default MaintenanceSession;
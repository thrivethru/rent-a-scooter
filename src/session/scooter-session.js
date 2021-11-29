import Session from './session.js';

class ScooterSession extends Session {
    static scooterSessions = [];

    constructor(type, scooterId, ownerId, startLocationId) {
        super(type, ownerId);
        this.scooterId = scooterId;
        this.startLocationId = startLocationId;
        this.endLocationId = null;
        this.constructor.scooterSessions = [...this.constructor.scooterSessions, this];
    }

    static getActiveSessions() {
        return ScooterSession.scooterSessions.filter(session => session.isActive);
    }

    static getSessionById(sessionId) {
        return ScooterSession.scooterSessions.find(session => session.id === sessionId);
    }

    static getSessionsByScooterId(scooterId) {
        return ScooterSession.scooterSessions.filter(session => session.scooterId === scooterId);
    }

    static getSessionsByOwnerId(ownerId) {
        return ScooterSession.scooterSessions.filter(session => session.ownerId === ownerId);
    }
    
    endSession(endLocationId) {
        super.endSession();
        this.endLocationId = endLocationId;
    }
}

export default ScooterSession;
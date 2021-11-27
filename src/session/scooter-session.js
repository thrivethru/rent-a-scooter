class ScooterSession {
    static currentId = 0;
    static scooterSessions = [];

    constructor(type, scooterId, ownerId, startLocationId) {
        this.id = this.constructor.currentId++;
        this.type = type;
        this.scooterId = scooterId;
        this.ownerId = ownerId
        this.startTime = new Date();
        this.startLocationId = startLocationId;
        this.endTime = null;
        this.endLocationId = null;
        this.isActive = true;
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
        this.endTime = new Date();
        this.endLocationId = endLocationId;
        this.isActive = false;
    }

    getSessionDuration() {
        return this.endTime ? this.endTime - this.startTime : Date.now() - this.startTime;
    };
}

export default ScooterSession;
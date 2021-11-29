class Session {
    static currentId = 0;
    static sessions = [];

    constructor(type, ownerId) {
        this.id = this.constructor.currentId++;
        this.type = type;
        this.ownerId = ownerId
        this.startTime = new Date();
        this.endTime = null;
        this.isActive = true;
        this.constructor.sessions = [...this.constructor.sessions, this];
    }

    static getActiveSessions() {
        return Session.sessions.filter(session => session.isActive);
    }

    static getSessionById(sessionId) {
        return Session.sessions.find(session => session.id === sessionId);
    }

    static getSessionsByOwnerId(ownerId) {
        return Session.sessions.filter(session => session.ownerId === ownerId);
    }
    
    endSession() {
        this.endTime = new Date();
        this.isActive = false;
    }

    getSessionDuration() {
        return this.endTime ? this.endTime - this.startTime : Date.now() - this.startTime;
    };
}

export default Session;
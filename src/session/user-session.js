import Session from './session.js';

class UserSession extends Session {
    static userSessions = [];

    constructor(user) {
        super("User", user.id);
        this.currentUser = user;
        this.constructor.userSessions = [...this.constructor.userSessions, this];
    }
}

export default UserSession;
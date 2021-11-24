const Person = require('./person');

class Maintenance extends Person {
    constructor(name, license, email, phone) {
        super(name, license, email, phone);
    }

    repairScooter() {

    }

    returnScooterToActive() {
        
    }
}

module.exports = Maintenance;
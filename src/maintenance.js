import Person from './person.js';

class Maintenance extends Person {
    constructor(name, license, email, phone) {
        super(name, license, email, phone);
    }

    repairScooter() {

    }

    returnScooterToActive() {
        
    }
}

export default Maintenance;
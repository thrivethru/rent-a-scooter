const Person = require('./person');

class Maintenance extends Person {
    constructor(name) {
        super(name);
    }
}

module.exports = Maintenance;
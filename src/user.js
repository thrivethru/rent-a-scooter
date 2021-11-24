const Person = require('./person');

class User extends Person {
    constructor(name) {
        super(name);
    }
}

module.exports = User;
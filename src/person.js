class Person {
    static currentId = 0;
    static people = [];
    constructor(name) {
        if (name === undefined) throw new Error("person must have a name");
        this.name = name;
        this.id = this.constructor.currentId++;

        this.constructor.people = [...this.constructor.people, this];
    }
}

module.exports = Person;
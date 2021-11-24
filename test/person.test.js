const Person = require('../src/person');

describe("Person class", () => {
    test("Creates a person instance", () => {
        expect(Person.people.length).toBe(0);
        const name = "John";
        const testPerson = new Person(name);
        expect(testPerson).toBeDefined();
        expect(testPerson instanceof Person).toBeTruthy();
    });

    test("Adds to people", () => {
        expect(Person.people.length).toBe(1);
        const nameA = "John";
        const testPersonA = new Person(nameA);
        expect(Person.people.length).toBe(2);
        const nameB = "Jane";
        const testPersonB = new Person(nameB);
        expect(Person.people.length).toBe(3);
        // expect(testPerson.name).toBe(name)
    });   

    test("Has a name", () => {
        expect(() => new Person()).toThrowError("person must have a name");
        const name = "John";
        const testPerson = new Person(name);
        expect(testPerson.name).toBe(name)
    });   
});
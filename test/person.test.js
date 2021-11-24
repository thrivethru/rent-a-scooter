const Person = require('../src/person');

describe("Person class", () => {
    test("Creates a person instance", () => {
        expect(Person.people.length).toBe(0);
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const testPerson = new Person(name, license, email, phone);
        expect(testPerson).toBeDefined();
        expect(testPerson instanceof Person).toBeTruthy();
    });

    test("Adds to people", () => {
        expect(Person.people.length).toBe(1);
        const nameA = "John";
        const licenseA = "1234";
        const emailA = "mark@me.com";
        const phoneA = "555-555-5555";
        const testPersonA = new Person(nameA, licenseA, emailA, phoneA);
        expect(Person.people.length).toBe(2);
        const nameB = "Jane";
        const licenseB = "432";
        const emailB = "you@you.com";
        const phoneB = "555-555-5552";
        const testPersonB = new Person(nameB, licenseB, emailB, phoneB);
        expect(Person.people.length).toBe(3);
    });   

    test("Has a name", () => {
        expect(() => new Person()).toThrowError("person must have a name");
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const testPerson = new Person(name, license, email, phone);
        expect(testPerson.name).toBe(name);
    });
    
    test("Has a license", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        expect(() => new Person(name)).toThrowError("person must have a license");
        const testPerson = new Person(name, license, email, phone);
        expect(testPerson.license).toBe(license);
    });
    
    test("Has an email", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        expect(() => new Person(name, license)).toThrowError("person must have an email");
        const testPerson = new Person(name, license, email, phone);
        expect(testPerson.email).toBe(email);
    });
    
    test("Has a phone", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        expect(() => new Person(name, license, email)).toThrowError("person must have a phone");
        const testPerson = new Person(name, license, email, phone);
        expect(testPerson.phone).toBe(phone);
    });   
});
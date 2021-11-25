class Person {
    static currentId = 0;
    static people = [];

    constructor(name, license, email, phone) {
        if (name === undefined) throw new Error("person must have a name");
        if (license === undefined) throw new Error("person must have a license");
        if (email === undefined) throw new Error("person must have an email");
        if (phone === undefined) throw new Error("person must have a phone");
        this.name = name;
        this.id = this.constructor.currentId++;
        this.license = license;
        this.email = email;
        this.phone = phone;
        this.constructor.people = [...this.constructor.people, this];
    }
}

export default Person;
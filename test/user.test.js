const User = require('../src/user');

describe("User class", () => {
    test("Creates a user instance", () => {
        const name = "John";
        const testUser = new User(name);
        expect(testUser).toBeDefined();
        expect(testUser instanceof User).toBeTruthy();
    });
});
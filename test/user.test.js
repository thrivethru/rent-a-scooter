const User = require('../src/user');

describe("User class", () => {
    const name = "John";
    const testUser = new User(name);
    test("Creates a user instance", () => {
        expect(testUser).toBeDefined();
        expect(testUser instanceof User).toBeTruthy();
    });
});
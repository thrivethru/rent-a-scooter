import Scooter from '../src/scooter.js';

describe("Scooter class", () => {
    const testScooter = new Scooter();
    
    test("Creates a scooter instance", () => {
        expect(testScooter).toBeDefined();
        expect(testScooter instanceof Scooter).toBeTruthy();
    });

    test("has an id of type number", () => {
        expect(typeof testScooter.id).toBe("number");
        expect(testScooter.id).toBe(0);
    });

    test("can get a scooter by id", () => {
        const scooter = Scooter.getScooterById(testScooter.id);
        expect(scooter instanceof Scooter).toBeTruthy();
        expect(scooter).toBe(testScooter);
    });

    test("Scooter must start with 0 battery level", () => {
        expect(testScooter.batteryLevel).toBe(0);
    });

    test("Scooter must start in maintenance status", () => {
        expect(testScooter.status).toBe("Maintenance");
    });

    test("Scooter must have a max range defaulting to 32km", () => {
        expect(testScooter.maxRange).toBe(32);
    });

    test("Scooter can recharge, updating battery level to 100 and status to Available", () => {
        testScooter.recharge();
        expect(testScooter.batteryLevel).toBe(100);
        expect(testScooter.status).toBe("Available");
    });

    test("Scooter can move, descreasing battery level proportionally to max range", () => {
        testScooter.move(16);
        expect(testScooter.batteryLevel).toBe(50);
    });

    test("Scooter won't move if not enough battery", () => {
        testScooter.move(50);
        expect(testScooter.batteryLevel).toBe(50);
    });

    test("Can list all scooters", () => {
        const scootersA = Scooter.allScooters();
        expect(scootersA.length).toBe(1);
        const testScooterB = new Scooter();
        const scootersB = Scooter.allScooters();
        expect(scootersA.length).toBe(1);
        expect(scootersB.length).toBe(2);
        expect(scootersB.every(scooter => scooter instanceof Scooter)).toBeTruthy();
    });

    test("Can list only available scooters", () => {
        const scooters = Scooter.allScooters();
        expect(scooters.length).toBe(2);
        const availableScooters = Scooter.availableScooters();
        expect(availableScooters.length).toBe(1);
        expect(availableScooters.every(scooter => scooter.status === "Available")).toBeTruthy();
    });
});
// import required files, create new manager object
const Manager = require('../lib/Manager');
const manager = new Manager('test', 4, 'test@test.com', 9081234567);

test('to set office number', () => {
    expect(manager.officeNumber).toBe(9081234567);
});

test('for get role method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('for get office number method', () => {
    expect(manager.getOffice()).toBe(9081234567);
});
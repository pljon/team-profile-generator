// import required file and create new object
const Intern = require('../lib/Intern');
const intern = new Intern('test', 3, 'test@test.com', 'school');

// test to set school via user input
test('for setting school', () => {
    expect(intern.school).toBe('school');
});

// test get role method
test('for get role method', () => {
    expect(intern.getRole()).toBe('Intern');
});

// test get school method
test('for get school method', () => {
    expect(intern.getSchool()).toBe('school');
});
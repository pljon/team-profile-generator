// Import Engineer class with require()
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('test', 2, 'test@test.com', 'username');

// Test setting github account
test("to set github account", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Export the github of the employee object to be equal to the value of the github variable
  expect(engineer.github).toEqual('username');
});

// Test get role method
test("for get role method", () => {
  // Assign "Engineer" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
  // Export getRole() to return the role to be equal to the value of the role variable
  expect(engineer.getRole()).toEqual('Engineer');
});

// Test get github method
test("for get github method", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Expect getGithub() to return the github  name to be equal to the value of the github variable
  expect(engineer.getGithub()).toEqual('username');
});

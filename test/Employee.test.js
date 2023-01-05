// Import Employee class with require()
const Employee = require('../lib/Employee');
const employee = new Employee('test', 1, 'test@test.com');

// Test instantiate Employee instance
test("to instantiate employee instance", () => {
  // Instantiate the Employee class with new operator to create an object and assign it to an new variable
  // Expect the type of the variable to be the "object" data type
  expect(employee instanceof Employee).toBe(true);
});

// Test setting name of an employee
test("to set the name of employee", () => {
  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to an new variable
  // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
  expect(employee.name).toBe('test');
});

// Test setting id of an employee
test("to set id of employee", () => {
  // Assign a number as an id to a new variable for the employeee id
  // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
  // Expect the id of the employe object to be equal to the value of the id variable
  expect(employee.id).toBe(1);
});

// Test setting email of an employee
test("to set email of employee", () => {
  // Assign an email to a new variable
  // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
  // Expect the email of the employee object to be equal to the value of the email variable
  expect(employee.email).toBe('test@test.com');
});

// Test get name method
test("to get name", () => {
  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
  // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
  expect(employee.getName()).toBe('test');
});

// Test get id method
test("to get id", () => {
  // Assign an id of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and the id variable as auguments, to create an object and assign it to an new variable
  // Expect the getId method of the object to return the id to be equal to the value of the emplyee id variable
  expect(employee.getID()).toBe(1);
});

// Test get email method
test("to get email", () => {
  // Assign an email of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and an id and the email variable as auguments, to create an object and assign it to an new variable
  // Expect the getEmail method of the object to return the email to be equal to the value of the emplyee email variable
  expect(employee.getEmail()).toBe('test@test.com');
});

// Test get role method
test("to get role", () => {
  // Assign "Employee" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email as auguments, to create an object and assign it to an new variable
  // Expect getRole() to return the role to be equal to the value of the role variable
  expect(employee.getRole()).toBe('Employee');
});

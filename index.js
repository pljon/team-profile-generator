// import manager, engineer, intern files with require()
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer with require()
const inquirer = require('inquirer');

// import path with require()
const path = require('path');

// import fs with require()
const fs = require('fs');

// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const render = require('./lib/generateHTML');

// create variable to hold the path to dist subfolder using path lib resolve method
const DIR_OUTPUT = path.resolve(__dirname, 'dist');

// create variable to hold the path to team.html using path lib join method
const HTML_FILE = path.join(DIR_OUTPUT, 'team.html');

// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
const employees = [];

// array of questions for manager
const managerQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the manager:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter the employee ID of the manager:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of the manager:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter the office number of the manager:',
        name: 'office'        
    },
    {
        type: 'list',
        message: 'How would you like to continue?',
        name: 'next',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building my Team']
    },
];

// array of questions for engineer
const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the engineer:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter the employee ID of the engineer:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of the engineer:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter the Github username of the engineer:',
        name: 'github'
    },
    {
        type: 'list',
        message: 'How would you like to continue?',
        name: 'next',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building my Team']
    },
];

// array of questions for intern
const internQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the intern:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter the employee ID of the intern:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of the intern:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter the school of the intern:',
        name: 'school'
    },
    {
        type: 'list',
        message: 'How would you like to continue?',
        name: 'next',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building my Team']
    },
];


// create manager function
function init() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        employees.push(manager);
        if (answers.next === 'Add Engineer') {
            addEngineer();
        } else if (answers.next === 'Add Intern') {
            addIntern();
        } else {
            generateHTML(render(employees));
        }
    })
};

// make call to create manager function to start the main process
init();

// add engineer function
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        if (answers.next === 'Add Engineer') {
            addEngineer();
        } else if (answers.next === 'Add Intern') {
            addIntern();
        } else {
            generateHTML(render(employees));
        }
    })
};

// add intern function
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        if (answers.next === 'Add Engineer') {
            addEngineer();
        } else if (answers.next === 'Add Intern') {
            addIntern();
        } else {
            generateHTML(render(employees));
        }
    })
};

// build team function
const generateHTML = newHTML => {
    fs.access(DIR_OUTPUT, err => {
      if (err) {
        // if directory does not exist, create it
        fs.mkdir(DIR_OUTPUT, err => {
          if (err) throw err;
          // if directory was created, write the file
          fs.writeFile(HTML_FILE, newHTML, err => {
            if (err) throw err;
            console.log('Team Page Created Successfully!');
          });
        });
      } else {
        // Directory exists, write the file
        fs.writeFile(HTML_FILE, newHTML, err => {
          if (err) throw err;
          console.log('Team Page Created Successfully!');
        });
      }
    });
  };


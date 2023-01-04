// 1.
// import manager, engineer, intern files with require()
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// import inquirer with require()
const inquirer = require('inquirer');
// import path with require()
const html = require('./src/page-template.js');
// import fs with require()
const fs = require('fs');

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const render = require('./src/page-template');

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
const DIST_FOLDER = path.resolve(__dirname, 'dist');
// create variable to hold the path to team.html using path lib join method
const HTML_FILE = path.join(DIST_FOLDER, '')

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
// create an empty employee id array to store the employee ids

// 5.
// print user of usage

// 6.
// make call to create manager function to start the main process

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable



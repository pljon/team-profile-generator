
# Team Profile Generator

A generator that creates a webpage that displays basic information for each team member.

## Description

This project's motivation was to allow quick access to a team member's email and GitHub profile.  It removes the need to go to several places to get the information you need by having it all in one place. This project has taught me the importance in ensuring tests pass before building other features, how to utilize objects in JavaScript, and pass through data and information using Node.js.

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)

## Installation
Add `-y` to this command line to answer yes to all prompts :
```
npm init
``` 
Install inquirer version 8.2.4 :
```
npm i inquirer@8.2.4 
```
Install jest :
```
npm i jest
```
## Usage

To begin prompts to start creating a team member profile webpage :
```
node index.js 
```
Upon completion to your needs, a new team.html file will be created in the `/dist` folder.

## Contributing

[Jonathan Plaras](https://github.com/pljon)

## Tests

To ensure all required packages and scripts have been installed, run this in command line :
```
npm test
```

## Questions

If you have any questions about this project, please contact me at jonplaras@gmail.com. You can also visit my [GitHub profile](https://github.com/pljon) to view my other projects.

## Sample

Example webpage found in `/dist` folder

## Demo

![video-sample](./assets/video/team-html-generator.mp4)
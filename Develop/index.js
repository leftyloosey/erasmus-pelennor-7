// TODO: Include packages needed for this application
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "Title of README?",
    },
    {
    type: 'input',
    name: 'description',
    message: "Describe it:",
    },
    {
    type: 'input',
    name: 'contents',
    message: "Table of Contents:",
    },
    {
    type: 'input',
    name: 'installation',
    message: "Installation instructions:",
    },
    {
    type: 'input',
    name: 'usage',
    message: "Usage Information:",
    },
    {
    type: 'input',
    name: 'contribute',
    message: "Contribution Guidelines:",
    },
    {
    type: 'input',
    name: 'test',
    message: "Testing Instructions:",
    }
]

  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '))
  })
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

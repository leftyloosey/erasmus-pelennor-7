// TODO: Include packages needed for this application
const inquirer = require("inquirer")
//const fs = require("fs")
const gen = require("./utils/generateMarkdown")


var badge
var licenseInfo

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "Title of README?",
    },
    {
    type: 'input',
    name: 'desc',
    message: "Describe it:",
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
    name: 'test',
    message: "Testing Instructions:",
    },
    {
      type: 'input',
      name: 'contribute',
      message: "Contribution Guidelines:",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license?',
      choices: ['Apache',
                'GNU GPL',
                'MIT',
                'None',
              ]
    },
    {
      type: 'input',
      name: 'name',
      message: "Your full name?",
    },
    {
      type: 'input',
      name: 'user',
      message: "GitHub Username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "Email address?",
    },
]

// a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    gen.renderLicense(data.license, data)
    gen.generateMarkdown(data)
  })
}

// Function call to initialize app
init();

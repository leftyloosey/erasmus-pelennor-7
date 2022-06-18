// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

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

    // {
    // type: 'input',
    // name: 'contents',
    // message: "Table of Contents:",
    // },
    // {
    // type: 'input',
    // name: 'installation',
    // message: "Installation instructions:",
    // },
    // {
    // type: 'input',
    // name: 'usage',
    // message: "Usage Information:",
    // },
    // {
    // type: 'input',
    // name: 'contribute',
    // message: "Contribution Guidelines:",
    // },
    // {
    // type: 'input',
    // name: 'test',
    // message: "Testing Instructions:",
    // }
    {
      type: 'list',
      name: 'license',
      message: 'Which license?',
      choices: ['Apache', 
                'BSD 2', 
                'BSD3',
                'GPL',
                'LGPL'],
    },
]

var write = fs.createWriteStream('test.txt', {
  flags: 'a' 
})


// TODO: Create a function to write README file
function writeToFile(data) {
  write.write("# "+data.title.toString()+'\r\n')
  write.write("## "+data.desc.toString()+'\r\n')
  write.write("## "+data.contents.toString()+'\r\n')
  write.write("## "+data.installation.toString()+'\r\n')
  write.write("## "+data.usage.toString()+'\r\n')
  write.write("## "+data.contribute.toString()+'\r\n')
  write.write("## "+data.test.toString()+'\r\n')
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    //console.log(JSON.stringify(answers, null, '  '))
    writeToFile(answers)
  })
}

// Function call to initialize app
init();

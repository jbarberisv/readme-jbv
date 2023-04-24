// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input

function questions () {
  return inquirer.prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'project',
        message: 'Enter the name of your project?',
      },
      {
        type: 'input',
        message: 'Enter your full name?',
        name: 'name',
      },
      {
        type: 'input',
        name: 'githubuser',
        message: 'Enter your Github user',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
      type: 'input',
      name: 'screenshot',
      message: 'Add a screenshot URL',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select project license',
        choices: ['GPLv2', 'GPLv3', 'MIT', 'BSD','MIT', 'Apache2.0', 'None'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'features',
        message: 'Enter the features your project contains',
      },
      {
        type: 'input',
        name: 'deployment',
        message: 'Enter deployment URL',
      },
      
      
      

    ])
    .then((answers) => {
      console.log(answers)

      return generateMarkdown(answers);



    })
    .then((data) => {
      console.log(data);
      fs.writeFile('../dist/README.md', data,(err)=> {
        if(err){
          console.log('error',err); 
        }
        console.log('DONE');
      })
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();

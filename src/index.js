// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

function questions () {
  return inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
      },
      {
        type: 'input',
        name: 'githubuser',
        message: 'What is your Github user',
      },
      

    ])
    .then((answers) => {
      console.log(answers)
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

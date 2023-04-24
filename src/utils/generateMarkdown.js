// Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ![alt text](https://img.shields.io/badge/License-${answers.license}-brightgreen)
  # ${answers.project}
        
  ## Table of Contents

  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Features & Technology](#features-and-technology)
  - [Deployment](#deployment)
  - [Credits](#credits)

  ## Description
  ${answers.description}

  ## Screenshot

  ![alt screenshot](${answers.screenshot})
  

  ## Features and Technology
  ${answers.features}
 
  ## Deployment
  [Click Here](${answers.deployment})

  
  
  ## Credits
  
  [${answers.name}](https://github.com/${answers.githubuser})`
}

module.exports = { generateMarkdown };

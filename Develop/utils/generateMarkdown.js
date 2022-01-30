// const inquirer = require("inquirer");
// const licenseJS = require("./license");
// const projectsArr = require("./Develop/index.js");
// const contribute = require("./contribute");
// const fs = require("fs");


const generateMarkdown = projectsArr => {
    if (!projectsArr) {
        return "No Data Found!!";
    }
    return `

    # ${projectsArr.title}    ${projectsArr.name}                  

    ## ${projectsArr.description}   
    
    ## Table of Contents     
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${projectsArr.install}
    
    ## Usage
    
    ${projectsArr.usage}   
        
    
    ## Credits
    
    ${projectsArr.contributions}
    
    ## License
    
    
    
    ---------------------------------    
    
    ## Features
    
    ${projectsArr.features}
    
    ## How to Contribute
    
    ${projectsArr.contribute}
    
    ## Tests
    
    
    
    `
}

module.exports = generateMarkdown;

const inquirer = require("inquirer");
const licenseJS = require("./license");

const contribute = require("./contribute");
const fs = require("fs");


const generateMarkdown = projectsArr => {
    if (!projectsArr) {
        return "";
    }
    return `

    # ${projectsArr.title};                     

    ## ${projectsArr.description};    
    
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
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    ${projectsArr.features}
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.${projectsArr.contribute}
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    
    }`
}

module.exports = generateMarkdown;

const licenseJS = require("./license");
const getBadge = require("./license")
const contribute = require("./contribute");
// const fs = require("fs");
const badge = "mit";

// if (projectsArr.license === mit)


const generateMarkdown = projectsArr => {    
    return `# ${projectsArr.title}

![Github licence](http://img.shields.io/badge/license-${projectsArr.license}-blue.svg)

     
## Description 
    
${projectsArr.description}   
    
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation

${projectsArr.installation}
    
## Usage

${projectsArr.usage}   
    
## License

${licenseJS.getLicense(`${projectsArr.license}`)}

  
${contribute}

    
## Tests
    
${projectsArr.tests}


## Questions

Please direct all inquiries to ${projectsArr.email}.  Please allow at least 48 hours for a response.   
You may view more of my projects at https://github.com/${projectsArr.github}.
`
}

module.exports = generateMarkdown;

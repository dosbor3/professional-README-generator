const licenseJS = require("./license");
const getBadge = require("./license")
const contribute = require("./contribute");

const generateMarkdown = projectsArr => {    
    let badge = "mit";

    if (projectsArr.license === "mit") {
        badge = "mit";
    }
    else if (projectsArr.license === "boost") {
        badge = "boost";

    }
    else {
        badge = "unlicense";
    }
    
    
    
    return `# ${projectsArr.title}

![License Badge](/Develop/assets/images/${badge}.jpg)

     
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

## Contributing
  
${contribute}

    
## Tests
    
${projectsArr.tests}


## Questions

Please direct all inquiries to ${projectsArr.email}.  Please allow at least 48 hours for a response.   
You may view more of my projects at https://github.com/${projectsArr.github}.
`
}

module.exports = generateMarkdown;

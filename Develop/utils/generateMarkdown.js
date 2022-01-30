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

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.  Source code can be found at http://github.com/${projectsArr.github}.  Should
you have any questions, comments, or concerns, please feel free to reach out via email at ${projectsArr.email}. 

## Image of Application 
![applicationImage](https://user-images.githubusercontent.com/40706088/151722257-a445292a-e961-41cf-9243-081c3a5c8cc4.jpg)



## Image 2 of Application
![applicationImage2](https://user-images.githubusercontent.com/40706088/151722352-280586a1-a854-4a53-8cdc-596bd19c0aec.jpg)


`
}



module.exports = generateMarkdown;

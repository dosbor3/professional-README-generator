// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = async () => {    
    
    return inquirer.prompt([
        {
            type: "input", 
            name: "name",
            message: "Please include your FULL NAME:  (required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please Enter your FULL NAME: (required) ");
                    return false;
                }
            }             
        },
        {
            type: "input", 
            name: "github",
            message: "Please include your GitHub username:  (required)",
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log("Please include your GitHub username:  (required)");
                    return false;
                }
            }
        },
        {
            type: "input", 
            name: "email",
            message: "Please include your email address:  (required)",
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log("Please include your email address:  (required)");
                    return false;
                }
            }            
        },        
        {
            type: "input",
            name: "title",
            message: "Enter the Project's Title: (required) ", 
            validate: title => {
                if (title) {
                    return true;
                }
                else {
                    console.log("Please Enter the Project's Title: ");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project. (required)", 
            validate: description => {
                if (description) {
                    return true;
                }
                else {
                    console.log("Please Enter a project description: ");
                    return false;
                }
            }
        },
        {
            type: "input", 
            name: "installation",
            message: "Provide a step-by-step description of how to get the development environment running. "
        },
        {
            type: "input", 
            name: "usage", 
            message: "Provide instructions and examples for use. "
    
        },
        {
            type: "list",
            name: "license",
            message: "Please select licensing that apply below: ",
            choices: ["mit", "boost", "unlicense"],
            default: 0
        },
        {
            type: "input", 
            name: "tests",
            message: "Include any sample test runs and instructions on how to run them here: "
        }          
     ]);
    };
    
      // wrapper around fs.writeFile()
      const writeFile = (fileName, data) => {
        fs.writeFile(`./dist/${fileName}`, generateMarkdown(data), err => err && console.log(err));
      };
  
      // logic flow for the application
      const init = async () => {
        // answers is the result of prompt user
        const answers = await promptUser();
                
            
        module.exports = {answers};
        
        // write to README.md with the supplied answers
        writeFile("README.md", answers);
        
    };
  
    // start the application
    init()

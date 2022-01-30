// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const {userPrompt} = require("./Develop/index.js");
const licenseJS = require("./utils/license");
const contribute = require("./utils/contribute");
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
        },
        {
            type: "confirm",
            name: "confirmImage",
            message: "Do you wish to add an image to the README.md file? ",
            default: false
        },
        {
            type: "input", 
            name: "image",
            message: "Please include the filename of your image:  (Ex: image.png)",
            when: ({confirmImage}) => confirmImage
        }        
     ]);
    };


    const promptFeature = readMeData => {
        console.log(`
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                   Add a Feature
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      `);
      
        //If there's no "projects" array property, create one
        if (!readMeData.features) {
            readMeData.features = [];
        }
      
        return inquirer.prompt([
          {
            type:"input",
            name: "feature", 
            message: "List a feature of your project (Required) ",
            validate: featureInput => {
              if (featureInput) {
                return true;
              }
              else {
                console.log("Please List a feature of your project (Required) ");
                return false;
              }
            }        
          },
          {
            type: 'confirm',
            name: 'confirmAddFeature',
            message: 'Would you like to enter another feature?',
            default: false   
          }
        ])
        .then(featureData => {
          readMeData.features.push(featureData);
            if (featureData.confirmAddFeature) {
              return promptFeature(readMeData);
            } else {
              return readMeData;
            }
        });
      };
      
      // wrapper around fs.writeFile()
      const writeFile = (fileName, data) => {
        fs.writeFile(`./dist/${fileName}`, generateMarkdown(data), err => err && console.log(err));
      };
  
      // logic flow for the application
      const init = async () => {
        // answers is the result of prompt user
        const answers = await promptUser();
        const readMeData = async () => await promptFeature(answers);

        console.log(readMeData);
            
        module.exports = {readMeData};
        
        // write to README.md with the supplied answers
        writeFile("README.md", readMeData);    
    };
  
    // start the application
    init()

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project's title: ",
        validate: title => {
            if (title) {
              return true;
            }
            else {
              console.log("Please enter your project's title!");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: ", 
    },
    {
        type: "input", 
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. "
    },
    {
        type: "input", 
        name: "usage", 
        message: "Provide instructions and examples for use. Include screenshots as needed."

    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select all licensing that apply below: ",
        choices: ["The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", 
        "Public Domain Dedication and License (PDDL)", "Artistic-2.0", "Open Font-1.1" ]
    },
    {
        type: "confirm",
        name: "confirmContributions", 
        message: "Do you wish to add any contributions? ",
        default: true
    },
    {
        type: "input", 
        name: "contributions",
        message: "List your contributor's FULL NAME followed by a [SPACE] and then their github account: ",
        when: ({confirmContributions}) => confirmContributions
    },
    {
        type: "input", 
        name: "tests",
        message: "Include your test and instructions on how to run them here: "
    }, 


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

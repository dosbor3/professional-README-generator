console.log("Hello Node!");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
]).then(answers => console.log(answers));

//for each example
const sampleArr = [
    "Kick",
    "dirt",
    "handsome",
    "keeper",
    "stay"
];

sampleArr.forEach((processArr) => {
    console.log(processArr);
});

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;



console.log(generatePage('Jane', 'janehub'));
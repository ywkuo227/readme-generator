// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    }, {
        type: "input",
        message: "What is the description of this project?",
        name: "description"
    }, {
        type: "input",
        message: "What is the installation instruction?",
        name: "installation"
    }, {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage"
    }, {
        type: "input",
        message: "Any screenshot in assets/images to include (eg. screenshot.png)? Answer 'na' if N/A.",
        name: "screenshot"
    }, {
        type: "input",
        message: "Any alt text for the screenshot? Leave it ''(empty) if N/A.",
        name: "scrnshotAltTxt"
    }, {
        type: "list",
        message: "Type of license?",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD3"],
        name: "license"
    }, {
        type: "input",
        message: "Guideline for contribution? Answer 'na' if N/A.",
        name: "contributing"
    }, {
        type: "input",
        message: "Instruction for tests? Answer 'na' if N/A.",
        name: "test"
    }, {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => writeToFile("sampleREADME.md", response));
}

// Function call to initialize app
init();

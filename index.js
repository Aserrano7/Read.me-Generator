// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        check: checkInput,
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        check: checkInput,
    },
    //Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation of how to install the software, or commands needed for the program.",
        check: checkInput,
    },

    //Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use your application.",
        check: checkInput,
    },

    //License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache 2.0",
            "GNU AGPLv3",
            "Boost Software 1.0",
            "GNU LGPLv3",
            "Mozilla",
        ],
        check: checkInput,
    },

    //Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your application.",
        check: checkInput,
    },

    //Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any test you would like for this project.",
        check: checkInput,
    },

    //github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        check: checkInput,
    },

    //email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        check: checkInput,
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    //Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation of how to install the software, or commands needed for the program.",
    },

    //Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use your application.",
    },

    //License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "Apache 2.0",
            "MIT",
            "Boost Software 1.0"
        ]
    },

    //Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your application.",
    },

    //Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any test you would like for this project.",
    },
    {
        type: "input",
        name: "questions",
        message:"Do you have any questions? ",
    },

    //github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",

    },

    //email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>{
        if (err) {
            return console.log(err);
        } else {
            return console.log("Success");
        }
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((data) => {
        writeToFile("./read.meExample/README.md", data);
    });
}

// Function call to initialize app
init();

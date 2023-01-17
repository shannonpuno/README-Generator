// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
        {
            type:'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type:'input',
            name: 'describeProject',
            message: 'What is your project?',
        },
        {
            type:'input',
            name: 'describeMotivation',
            message: 'What was your motivation to make the project?',
        },
        {
            type:'input',
            name: 'describeProblem',
            message: 'What problem does your project solve?',
        },
        {
            type:'input',
            name: 'installation',
            message: 'Please provide a step-by-step instruction required to install your project.',
        },
        {
            type:'input',
            name: 'usage',
            message: 'Please provide examples and instructions for use.',
        },
        {
            type:'input',
            name: 'credits',
            message: 'Please list collaborators (if any), list any third-party assets that require attributions.',
        },
        {
            type:'input',
            name: 'contributing',
            message: 'Describe your contributing guidelines.',
        },
        {
            type:'input',
            name: 'test',
            message: 'Please provide instructions on how to test and run your project.',
        },
        { 
            type:'list',
            name: 'license',
            message: 'Please select the license.',
            choices: [
                'mit',
                'apache-2.0',
                'gpl-2.0',
                'mpl-2.0',
                'none'
            ]
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
        }

    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if(err){
            return console.log(err);
        }
        console.log('Your data has been generated.');
    });
}



// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions)
    .then(function (answers) {
        console.log(answers);
        writeToFile(`${answers.title}.md`, answers)
    });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type:'input',
            name: 'describe-what',
            message: 'What is your project?',
        },
        {
            type:'input',
            name: 'describe-motivation',
            message: 'What was your motivation to make the project?',
        },
        {
            type:'input',
            name: 'describe-problem',
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
            type:'confirm',
            name: 'confirmlicense',
            message: 'Will you be needing a license for the project?',
            when: ({confirmlicense}) => {
                if (confirmlicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        { //if user confirms
            type:'list',
            name: 'license',
            message: 'Please select the license.',
            choices: [
                'mit',
                'apache-2.0',
                'gpl-2.0',
                'mpl-2.0'
            ]
        }
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
        console.log('Your data has been generated.');
    });
}

const asyncWriteToFile = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try{
        const userAns = await promptUser();
        const markdown = generateMarkdown(userAns);
        await asyncWriteToFile("users-README.md", markdown);
    }catch (err) {
        throw err;
    }

}

// Function call to initialize app
init();

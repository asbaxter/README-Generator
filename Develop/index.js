// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of you projects? ',
        type: 'input'
    },
    {
        name: 'github',
        messgae: 'What is your GitHub user name?',
        type: 'input'
    },
    {
        name: 'email',
        messgae: 'What is your email',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Describe your project: ',
        type: 'input'
    },
    {
        name: 'lincense',
        message: 'What license did you use',
        type: 'list',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'BSD', 'none']
    },
    {
        name: 'installation',
        messgae: 'Add the installation instructions: ',
        type: 'input'
    },
    {
        name: 'usage',
        messgae: 'What is your applications use case?',
        type: 'input'
    },
    {
        name: 'contribution',
        messgae: 'How can someone else contribute to this project? ',
        type: 'input'
    },
    {
        name: 'testing',
        messgae: 'Add any testing intructions: ',
        type: 'input'
    },
    {
        name: 'usage',
        messgae: 'What is you applications use case: ',
        type: 'input'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("It works");
        }
    })

};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('README.md', data);
  });

};

// Function call to initialize app
init();

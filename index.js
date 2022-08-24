/*
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
*/

// Global consts
const inquirer = require('inquirer');


const questions = [
    {
    // WHEN I enter my project title
        type:'input',
        name: 'ProjectTitle',
        message: 'What is the project title?',
        filter(val){
            if(val === ''){
                return 'testIng';
            }
            return val;
        }
    
        /*validate(value){
            console.log(value,"validate");
            return true;
        },
        filter(val) {
            console.log(val,"filter");
        }, */
    },
// WHEN I enter my GitHub username
{
    type:'input',
    name: 'gitHubUN',
    message: 'What is your github Name?',
    filter(val){
        if(val === ''){
            return 'l1keafox';
        }
        return val;
    }
},
// WHEN I enter my email address
{
    type:'input',
    name: 'email',
    message: 'What is your email address?',
    filter(val){
        if(val === ''){
            return 'raymond.ed.lewis@gmail.com'
        }
        return val;
    }
},

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

    {
        type:'input',
        name: 'description',
        message: 'description?',
        filter(val){
            if(val === ''){
                return 'what is life';
            }
            return val;
        }
    
    },

    {
        type:'input',
        name: 'installation',
        message: ' installation instructions?',
        filter(val){
            if(val === ''){
                return 'Installing here?';
            }
            return val;
        }
    
    },
    {
        type:'input',
        name: 'usage',
        message: 'usage information?',
        filter(val){
            if(val === ''){
                return 'how to use it';
            }
            return val;
        }
    
    },
    {
        type:'input',
        name: 'contribution',
        message: 'contribution guidelines?',
        filter(val){
            if(val === ''){
                return "Who's really every contrubting?";
            }
            return val;
        }
    
    },
    {
        type:'input',
        name: 'test',
        message: 'test instructions?',
        filter(val){
            if(val === ''){
                return 'test your ass yo';
            }
            return val;
        }
    
    },

// WHEN I choose a license for my application from a list of options

    {
        type:'input',
        name: 'License',
        message: 'License?',
        filter(value){
            
            if(value === ''){
                return '[MIT](https://choosealicense.com/licenses/mit/)';
            }
            return value;
        },
    },

];

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository

inquirer.prompt(questions).then((answers) =>{

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
//  Description, 
//  Table of Contents, 
//  Installation, 
//  Usage, 
//  License, 
//  Contributing, 
//  Tests, and  Questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// THEN this is displayed as the title of the README
answers.ProjectTitle;
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
answers.License;

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
answers.gitNubUN;
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
answers.email;
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
answers.description;
answers.usage;
answers.installation;
answers.contributing;
answers.test;

    
    console.log(answers);

});
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
                return 'Readme Maker';
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
{
    type:'input',
    name: 'image',
    message: 'Enter image other than readme.PNG?',
    filter(val){
        if(val === ''){
            return 'readme.PNG';
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
                return 'Using Node.js this creates a readme.md for future repos.';
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
                return '1. Download repo ';
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
                return "Run 'node index.js' and answer the prompts given";
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
                return "Raymond Lewis";
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
const fs = require('fs');
inquirer.prompt(questions).then((answers) =>{
    // 
    let strngToApnd = '';
    let rtn = '\n\n\n';
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, //  Table of Contents, //  Installation, //  Usage, //  License, //  Contributing, //  Tests, and  Questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// THEN this is displayed as the title of the README
strngToApnd+= "# "+ answers.ProjectTitle+rtn;

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
strngToApnd+= '\n\n\n';
strngToApnd+= "## Description \n";
strngToApnd+= answers.description+rtn;

strngToApnd+= "## Table of Contents \n";
//strngToApnd+= answers.description+rtn;
strngToApnd+= `1.  [installation](#installation)\n`
strngToApnd+= `2.  [Usage](#Usage)\n`
// 1.  [Documentation](#documentation)



strngToApnd+= "## Usage \n";
strngToApnd+= answers.usage+rtn;
strngToApnd+= `![Website](/assets/images/${answers.image})\n\n`
// Here we'll add an image.

strngToApnd+= "## installation \n";
strngToApnd+= '<a name="installation"></a>';
strngToApnd+= answers.installation+rtn;

strngToApnd+= "## contributing \n";
strngToApnd+= answers.contributing+rtn;

//strngToApnd+= "## test \n";
//strngToApnd+= answers.test+rtn;

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
strngToApnd+= "## Feedback and Contact info\n";
strngToApnd+= answers.gitHubUN+"\n";
strngToApnd+= answers.email+rtn;

strngToApnd+= "## License\n";
strngToApnd+= answers.License+rtn;

fs.appendFile('README.md',strngToApnd, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });   


});
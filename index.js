/*
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
*/

// Global consts
const inquirer = require("inquirer");
let licenseBadge;

const questions = [
  {
    // WHEN I enter my project title
    type: "input",
    name: "ProjectTitle",
    message: "What is the project title?",
    filter(val) {
      if (val === "") {
        return "Readme Maker";
      }
      return val;
    },
  },
  // WHEN I enter my GitHub username
  {
    type: "input",
    name: "gitHubUN",
    message: "What is your github Name?",
    filter(val) {
      if (val === "") {
        return "l1keafox";
      }
      return val;
    },
  },
  {
    type: "input",
    name: "image",
    message: "Enter image other than readme.PNG?",
    filter(val) {
      if (val === "") {
        return "readme.PNG";
      }
      return val;
    },
  },
  // WHEN I enter my email address
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    filter(val) {
      if (val === "") {
        return "raymond.ed.lewis@gmail.com";
      }
      return val;
    },
  },

  // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

  {
    type: "input",
    name: "description",
    message: "description?",
    filter(val) {
      if (val === "") {
        return "Using Node.js this creates a readme.md for future repos.";
      }
      return val;
    },
  },

  {
    type: "input",
    name: "installation",
    message: " installation instructions?",
    filter(val) {
      if (val === "") {
        return '1. Download repo \n2. Run "node index.js"';
      }
      return val;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "usage information?",
    filter(val) {
      if (val === "") {
        return "Run 'node index.js' and answer the prompts given";
      }
      return val;
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "contribution guidelines?",
    filter(val) {
      if (val === "") {
        return "We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:\n\n 1. Reporting a bug\n\n  2. Discussing the current state of the code\n\n 3. Submitting a fix \n\n 4. Proposing new features ";
      }
      return val;
    },
  },
  {
    type: "input",
    name: "test",
    message: "test instructions?",
    filter(val) {
      if (val === "") {
        return " This program only has one mode and no commands or test ";
      }
      return val;
    },
  },
  {
    type: "input",
    name: "deploy",
    message: "Do you want to deployment link?",
    filter(val) {
      if (val === "") {
        return false;
      }
      return true;
    },
  },

  // WHEN I choose a license for my application from a list of options

  {
    type: "list",
    name: "License",
    message: "License?",
    choices: ["mit", "isc", "Apache2.0"],
    filter(value) {
      switch (value) {
        case "mit":
          licenseBadge =
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          return "[MIT](https://choosealicense.com/licenses/mit/)";
        case "isc":
          let year = new Date().getFullYear();
          let fullname = "Raymond Lewis";
          licenseBadge =
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
          return `ISC License\n\nCopyright (c) ${year} ${fullname}\n\nPermission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.\n\n THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
        case "Apache2.0":
          licenseBadge =
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          return "<a href='https://opensource.org/licenses/Apache-2.0'>Click here for Apache-2.0 License </a>";
        default:
          return value;
      }
    },
  },
];

function createMD(answers){

  let strngToApnd = "";
  let rtn = "\n\n\n";
  // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled
  // Description, //  Table of Contents, //  Installation, //  Usage, //  License, //  Contributing, //  Tests, and  Questions
  // WHEN I click on the links in the Table of Contents
  // THEN I am taken to the corresponding section of the README

  // THEN this is displayed as the title of the README
  strngToApnd += "# " + answers.ProjectTitle + rtn;

  // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

  // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  //strngToApnd+= "## Description \n";
  if (licenseBadge) {
    strngToApnd += licenseBadge + "\n\n\n";
  }
  strngToApnd += answers.description + rtn;

  strngToApnd += "## Table of Contents \n";
  //strngToApnd+= answers.description+rtn;
  strngToApnd += `1.  [Usage](#Usage)\n`;
  strngToApnd += `2.  [Installation](#Installation)\n`;
  strngToApnd += `3.  [Contributing](#Contributing)\n`;
  strngToApnd += `4.  [Questions](#Questions)\n`;
  strngToApnd += `5.  [Tests](#Tests)\n`;
  strngToApnd += `6.  [License](#License)\n`;
  strngToApnd += "\n";
  strngToApnd += "## Usage \n";
  strngToApnd += answers.usage + rtn;

  if (answers.deploy) {
    strngToApnd +=
      "* " +
      `<a href='https://l1keafox.github.io/${answers.ProjectTitle}/'  target="_blank"> Click here for deployment </a> \n\n`;
  }

  strngToApnd += `![Website](/assets/images/${answers.image})\n\n`;
  // Here we'll add an image.

  strngToApnd += "## Installation \n";
  //strngToApnd+= '<a name="installation"></a>';
  strngToApnd += answers.installation + rtn;

  strngToApnd += "## Contributing \n";
  strngToApnd += answers.contribution + rtn;

  strngToApnd += "## Test \n";
  strngToApnd += answers.test + rtn;

  // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  strngToApnd += "## Questions\n";
  strngToApnd += `<a href='https://github.com/${answers.gitHubUN}'>${answers.gitHubUN} github.</a> \n\n`;
  //l1keafox
  strngToApnd +=
    `<a href="mailto: ${answers.email}">Email : ${answers.email}</a>` + "\n\n";
  //<h3>LinkedIn : <a href="https://www.linkedin.com/in/raymond-lewis-51719325/" target="_blank" >Here</h3>
  //strngToApnd+= answers.email+rtn;

  strngToApnd += "## License\n";
  strngToApnd += answers.License + rtn;  
  return strngToApnd;
}

function createMD2(answers){
  //   ${}
  let rtn = 
  `# ${answers.ProjectTitle}

  ${licenseBadge}
  
  ${answers.description}
  
  
  ## Table of Contents 
  1.  [Usage](#Usage)
  2.  [Installation](#Installation)
  3.  [Contributing](#Contributing)
  4.  [Questions](#Questions)
  5.  [Tests](#Tests)
  6.  [License](#License)
  
  ## Usage 
  ${answers.usage}
  
  
  ![Website](/assets/images/${answers.image})
  
  ## Installation 
  ${answers.installation}
  
  
  ## Contributing 
  ${answers.contribution}
  
  ## Test 
  ${answers.test}
  
  
  ## Questions
  <a href='https://github.com/${answers.gitHubUN}'>${answers.gitHubUN} github.</a> 
  
  <a href="mailto: ${answers.email}>Email :${answers.email}</a>
  
  ## License
  ${answers.License}
  `
  return rtn;
}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
const fs = require("fs");

inquirer.prompt(questions).then((answers) => {
  //
//  let strngToApnd = createMD(answers);
  let strngToApnd = createMD2(answers);
  fs.writeFile("README.md", strngToApnd, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
});

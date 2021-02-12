const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = "README.md";



//license options
const licenses = [
    {
        name: "MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        note: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
        link: "[View Full MIT License](https://opensource.org/licenses/MIT)"
    },
    {
        name: "Apache",
        badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        note: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
        link: "[View Full Apache License](https://opensource.org/licenses/Apache-2.0)"

    },
    {
        name: "Eclipse",
        badge: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
        note: "",
        link: "[View Full Apache License](https://opensource.org/licenses/EPL-2.0)"
    },
    {
        name: "Mozilla",
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        note: "[View Full Apache License](https://opensource.org/licenses/MPL-2.0)",
        link: "",
    },
    {
        name: "Unlicense",
        badge: "",
        note: "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
        link: "[View Full The Unlicense License](https://opensource.org/licenses/unlicense)"
    },
    {
        name: "GNU",
        badge: ""
    }

]
// array of questions for user
inquirer
  .prompt([
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is your project name?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'projDesc',
    //     message: 'Brief Description of your project:',
    //   },
      {
        type: 'list',
        name: 'projLic',
        message: 'Which license do you want to use for this project?',
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "Unlicense"],
      },
    //   {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is your email address?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Enter your GitHub Username:',
    //   },
    //   {
    //     type: 'input',
    //     name: 'install',
    //     message: 'Enter your project installation instructions:',
    //   },
    //   {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Enter your project usage:',
    //   },
    //   {
    //     type: 'input',
    //     name: 'test',
    //     message: 'What command will run the tests?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'How can the user contribute to this repo?',
    //   },
   


]).then((data) =>{
  let licBadge = "";
  let licNote = "";
  let licLink = "";
//switch to get license info
    switch(data.projLic){
        case 'MIT': 
            licBadge =licenses[0].badge;
            licNote = licenses[0].note;
            licLink = licenses[0].link;
            break;

        case 'Apache': 
            licBadge =licenses[1].badge;
            licNote = licenses[1].note;
            licLink = licenses[1].link;
            break;

        case 'Eclipse': 
            licBadge =licenses[2].badge;
            licNote = licenses[2].note;
            licLink = licenses[2].link;
            break;
    
        case 'Mozilla': 
            licBadge =licenses[3].badge;
            licNote = licenses[3].note;
            licLink = licenses[3].link;
            break;

        case 'Unlicense': 
            licBadge =licenses[4].badge;
            licNote = licenses[4].note;
            licLink = licenses[4].link;
            break;

        case 'GNU': 
            licBadge =licenses[5].badge;
            licNote = licenses[5].note;
            licLink = licenses[5].link;
            break;

    }
    

    console.log(licBadge)
    console.log(licLink)
})
  


const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

 
// array of questions for user
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'projDesc',
        message: 'Brief Description of your project:',
      },
      {
        type: 'list',
        name: 'projLic',
        message: 'Which license do you want to use for this project?',
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "Unlicense", "GNU"],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter your project installation instructions:',
        default: 'In the terminal, npm i.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage:',  
        default:  'In the terminal, use node index.js.'     
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command will run the tests?',
        default: 'In the terminal, npm run test.'
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can the user contribute to this repo?',
        default: 'No need to contribute at this time.'
      },
 
]).then((data) =>{
 console.log(data)
   
//put info in md util
 const newReadMe = generateMarkdown(data);
//make new file
fs.writeFileSync("README.md", newReadMe);
    
})
  


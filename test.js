const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

function readMe (){
    
       const data = {
        title: "ReadMe Maker",
        projDesc: "Generate a read me file for GitHub using javascript and node.",
        projLic: "MIT",
        email: "yourEmail@gmail.com",
        github: "profileHere",
        install: "Use npm i for the package.json",
        usage: "In the terminal, use node index.js",
        test: "In the terminal node test.js",
        contribute: "No need to contribute at this time."
        }
    
    const newReadMe = generateMarkdown(data);

    fs.writeFileSync("README.md", newReadMe);
}

readMe();
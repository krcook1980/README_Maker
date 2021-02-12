

// function to generate markdown for README

function generateMarkdown(data) {
 //license info
 let licBadge = "";
 let licLink = "";


switch(data.projLic) {
  case 'MIT': 
     licBadge= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licLink = "[View Full MIT License](https://opensource.org/licenses/MIT)";
      break;

  case 'Apache': 
      licBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licLink = "[View Full Apache License](https://opensource.org/licenses/Apache-2.0)";
      break;

  case 'Eclipse': 
      licBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
      licLink = "[View Full Apache License](https://opensource.org/licenses/EPL-2.0)";
      break;

  case 'Mozilla': 
      licBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licLink = "[View Full Apache License](https://opensource.org/licenses/MPL-2.0)";
      break;

  case 'Unlicense': 
      licBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licLink = "[View Full The Unlicense License](https://opensource.org/licenses/unlicense)";
      break;

  case 'GNU': 
      licBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licLink = "https://opensource.org/licenses/GPL-3.0";
      break;

};
console.log(licBadge)
 
  return `
  # ${data.title} ${licBadge}\n
---
  ## Description
  ${data.projDesc}

  ## License
  ${licLink}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)


  ## Installation
  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  Please see my [GitHub profile](https://github.com/${data.github})\n
  You can also email me questions at: ${data.email}

`;
}

module.exports = generateMarkdown;

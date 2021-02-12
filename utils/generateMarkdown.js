// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${licBadge}\n

  ## Description
  ${data.projDesc}

  ## License
  ${licNote}/n
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

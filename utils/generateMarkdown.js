// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!== 'none'){
    return `![${license} license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if(license !== 'none'){
switch (license) {
  case "GNU AGPLv3":
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  case "GNU GPLv3":
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  case "GNU LGPLv3":
    return "(https://www.gnu.org/licenses/lgpl-3.0)";
  case "Mozilla":
    return "(https://opensource.org/licenses/MPL-2.0)";
  case "MIT":
    return "(https://opensource.org/licenses/MIT)";
  case "Apache":
    return "(https://opensource.org/licenses/Apache-2.0)";
  default:
    return "(https://www.boost.org/LICENSE_1_0.txt)";
}
};
 } 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return (`This Project is license under the ${license} license`);
  }
  return ``;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)



## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}



## Questions
${data.questions}

GitHub: [${data.userName}](https://github.com/${data.userName})

Here is where you can email me if you have any questions: ${data.userEmail}
    `
  };


module.exports = generateMarkdown;

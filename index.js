// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileText = "";
    fileText += `${data.name}'s README\n\n`;
    fileText += ` # ${data.title}\n\n`;
    fileText += `${generateLicense(data.license)}\n\n`;
    fileText += `## Table of Contents\n\n`;
    fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
    fileText += `## Description\n\n${data.description}\n\n`;
    fileText += `## Installation\n\n${data.installation}\n\n`;
    fileText += `## Usage Information\n\n${data.usage}\n\n`;
    fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
    fileText += `## Test Instructions\n\n${data.test}\n\n`;
    fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
    fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
    fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
    fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
    fs.writeFile(fileName, fileText, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }

  function generateLicense(license) {
    if (license === "MIT") {

      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    
    } else if (license === "Apache 2.0 License") {

      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    
    } else if (license === "IBM Public License Version 1.0") {

      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
   
    } else if (license === "Mozilla Public License 2.0") {

      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    
    } else {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    }
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Name?",
          name: "name",
        },
        {
          type: "input",
          message: "Title?",
          name: "title",
        },
        {
          type: "input",
          message: "Description?",
          name: "description",
        },
        {
          type: "input",
          message: "Installation instructions?",
          name: "installation",
        },
        {
          type: "input",
          message: "Usage information?",
          name: "usage",
        },
        {
          type: "input",
          message: "Contribution guidelines?",
          name: "contribution",
        },
        {
          type: "input",
          message: "test instructions?",
          name: "test",
        },
        {
          type: "list",
          message: "type of license?",
          choices: [
            "MIT",
            "Apache 2.0 License",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
          ],
          name: "license",
        },
        {
          type: "input",
          message: "GitHub handle?",
          name: "github",
        },
        {
          type: "input",
          message: "email?",
          name: "email",
        },
      ])
      .then((data) => {
        writeToFile("sample-README.md", data);
      });
  }

init();

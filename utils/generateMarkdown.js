// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![${renderLicenseBadge}]`
}

function renderScreenshot(screenshot, scrnshotAltTxt) {
  if (screenshot !== null) {
    return `![${scrnshotAltTxt}](assets/images/${screenshot})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
${renderScreenshot(data.screenshot, data.scrnshotAltTxt)}

## License
  
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
## Contribute
${data.contributing}

## Tests
${data.test}

## Questions
GitHub: [${data.username}'s GitHub](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;

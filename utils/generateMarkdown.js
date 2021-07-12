// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license !== "None") {
     return `![${license} license](https://img.shields.io/badge/License-${license}-informational)`;
   } else if (license === "None") {
     return ``;
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  } else if (license === "None") {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
This project is under ${license} license.
`
  } else if (license === "None") {
    return ``;
  }
}

function renderScreenshot(screenshot, scrnshotAltTxt) {
  if (screenshot !== "na") {
    return `![${scrnshotAltTxt}](assets/images/${screenshot})`;
  } else if (screenshot === "na") {
    return ``;
  }
}

function renderContributeLink(contribute) {
  if (contribute !== "na") {
    return `- [Contribute](#contribute)`;
  } else if (contribute === "na") {
    return ``;
  }
}

function renderContributeSection(contribute) {
  if (contribute !== "na") {
    return `## Contribute
${contribute}
`
  } else if (contribute === "na") {
    return ``;
  }
}

function renderTestLink(test) {
  if (test !== "na") {
    return `- [Tests](#tests)`;
  } else if (test === "na") {
    return ``;
  }
}

function renderTestSection(test) {
  if (test !== "na") {
    return `## Tests
${test}
`
  } else if (test === "na") {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
${renderContributeLink(data.contributing)}
${renderTestLink(data.test)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderScreenshot(data.screenshot, data.scrnshotAltTxt)}

${renderLicenseSection(data.license)}
${renderContributeSection(data.contributing)}
${renderTestSection(data.test)}
## Questions
GitHub: [${data.username}'s GitHub](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;

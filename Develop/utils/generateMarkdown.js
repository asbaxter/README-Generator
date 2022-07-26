// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  
//}

//module.exports = generateMarkdown;
export default function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents<br /> 
  [Description](#Description)<br /> 
  [Installation](#Installation)<br /> 
  [Usage](#Usage)<br /> 
  [Contribution-Guidelines](#Contribution-Guidelines)<br /> 
  [Test-Instructions](#Test-Instructions)<br /> 
  [Contact-Me](#Contact-Me)<br /> 

  ## Description

  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage:

  ${data.usage}

  ## Contribution-Guidelines

  ${data.contribution}

  ## Test-Instructions

  ${data.testing}

  ## Contact-Me<br /> 

  Email: ${data.email}<br /> 
  GitHub:
  [Link](https://github.com/${data.github})

  `;
}
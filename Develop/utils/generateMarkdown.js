// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(data.license === 'Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(data.license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  else if(data.license === 'BSD'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  console.log(data.license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'MIT'){
    return 'MIT'
  }
  else if(data.license === 'Apache 2.0'){
    return 'Apache 2.0';
  }
  else if(data.license === 'ISC'){
    return 'ISC';
  }
  else if(data.license === 'BSD'){
    return 'BSD';
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data)} ${renderLicenseBadge(data)}
  ${renderLicenseLink(data)}

  ## Table of Contents

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
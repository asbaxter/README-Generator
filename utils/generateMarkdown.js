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
  if (data.license === 'MIT'){
    return '[Link to MIT](https://opensource.org/licenses/MIT)';
  }
  else if(data.license === 'Apache 2.0'){
    return '[Link to Apache](https://www.apache.org/licenses/LICENSE-2.0)';
  }
  else if(data.license === 'ISC'){
    return '[Link to ISC](https://opensource.org/licenses/ISC)';
  }
  else if(data.license === 'BSD'){
    return '[Link to BSD](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else{
    return '';
  }
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

  ## ${renderLicenseSection(data)} ${renderLicenseBadge(data)}<br /> 
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

  ## Usage

  ${data.usage}

  ## Contribution-Guidelines

  ${data.contribution}

  ## Test-Instructions

  ${data.testing}

  ## Contact-Me

  If you would like to reach out feel free to email or message me on GitHub, checkout the links below<br /> 
  Email: ${data.email}<br /> 
  GitHub:
  [Link](https://github.com/${data.github})

  `;
}
const fs = require("fs")
const write = fs.createWriteStream('README.md', {
  flags: 'a' })

// a function for rendering the license
function renderLicense(license, data) {
    switch (license) {
        case "Apache":
          badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
          licenseInfo = `Copyright 2022 ${data.name}
    
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
       
            http://www.apache.org/licenses/LICENSE-2.0
       
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
          implied. See the License for the specific language governing 
          permissions and limitations under the License.`
          break
    
        case "GNU GPL":
          badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
          licenseInfo = `Copyright (C) 2022  ${data.name}
    
          This program is free software: you can redistribute it and/or modify
          it under the terms of the GNU General Public License as published by
          the Free Software Foundation, either version 3 of the License, or
          (at your option) any later version.
      
          This program is distributed in the hope that it will be useful,
          but WITHOUT ANY WARRANTY; without even the implied warranty of
          MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
          GNU General Public License for more details.
      
          You should have received a copy of the GNU General Public License
          along with this program.  If not, see http://www.gnu.org/licenses.`
          break

        case ("MIT"):
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
          licenseInfo = `Copyright 2022 ${data.name}
    
          Permission is hereby granted, free of charge, to any person obtaining 
          a copy of this software and associated documentation files 
          (the "Software"), to deal in the Software without restriction, 
          including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software,
          and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:
    
          The above copyright notice and this permission notice shall be 
          included in all copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
          OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
          THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          break

          case ("None"):
            badge = ""
            licenseInfo = ""
            break

}}


 // a function to generate markdown for README
function generateMarkdown(data) {
      
      write.write(`# ${data.title}\r\n`)
      write.write(`${badge} \r\n`)
      write.write(`## Table of Contents:\r\n`)
      write.write(`### [General](#description)\r\n`)
      write.write(`### [Installation Instructions](#installation)\r\n`)
      write.write(`### [Usage Info](#usage)\r\n`)
      write.write(`### [Contribution Guidelines](#contribution)\r\n`)
      write.write(`### [Licensing Data](#license)\r\n`)
      write.write(`### [Contact Info](#questions)\r\n`)
      
      write.write(`## Description \r\n`)
      write.write(`${data.desc} \r\n`)
   
      write.write(`## Installation \r\n`)
      write.write(`${data.installation} \r\n`)

      write.write(`## Usage \r\n`)
      write.write(data.usage+"\r\n")

      write.write(`## Testing \r\n`)
      write.write(data.test+"\r\n")

      write.write(`## Contribution \r\n`)
      write.write(data.contribute+"\r\n")
      
      write.write(`## License \r\n`)
      write.write(licenseInfo +"\r\n")

      write.write(`## Questions? \r\n`)
      write.write(`Email me [here.](mailto:${data.email}) \r\n`)
      write.write(`And see my github [here.](https://www.github.com/${data.user}) \r\n`)
}

exports.renderLicense = renderLicense
exports.generateMarkdown = generateMarkdown
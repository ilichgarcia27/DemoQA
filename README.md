# Demo QA Automation 🚀

This "Demo QA" is a WebdriverIO automation project based on CucumberJS and Chai, intended to run on Google Chrome, Mozilla Firefox and Safari.

## Technologies ⚙

- WebdriverIO
- CucumberJS
- Chai
- Selenium Standalone

## Getting Started 🏁

### Prerequisites

Install [NodeJS](https://nodejs.org/es/) to enable the package manager for the required modules to run this automation project.

To check if you have NodeJS installed, run this command in your terminal

```bash
node -v
```

To check if you have NPM installed, run this command in your terminal

```bash
npm -v
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/ilichgarcia27/DemoQA
```

2. Install NPM packages

```bash
npm install
```

3. Run the automated tests project

```bash
npm run wdio
```

## Usage 🧪

```javascript
Then('should return an error', () => {
    element.click();

    expect(textBox)to.equal('Error, please enter valid information');
});
```

## Contributing ➕
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License ⛏
MIT License

Copyright (c) [2021] [Ilich Andrés García]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

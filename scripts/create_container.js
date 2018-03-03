const fs = require('fs-extra');
const path = require('path');

const dirBaseAddress = '../src/app';
const argumentsLength = process.argv.length;

// create directory and files using the fileName
try {
  for (let i = 2; i < argumentsLength; i += 1) {
    fs.ensureDirSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}`));
    fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}/component.jsx`));
    fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}/container.jsx`));
    fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}/actions.js`));
    fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}/constants.js`));
    fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${process.argv[i]}/reducer.js`));
  }
} catch (err) {
  throw new Error(err);
}

const fs = require('fs-extra');
const path = require('path');


const fileName = process.argv[2];
const dirBaseAddress = '../src/app';

// create directory and files using the fileName
try {
  fs.ensureDirSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}`));
  fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}/component.jsx`));
  fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}/container.jsx`));
  fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}/actions.js`));
  fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}/constants.js`));
  fs.ensureFileSync(path.resolve(__dirname, `${dirBaseAddress}/${fileName}/reducer.js`));
} catch (err) {
  throw new Error(err);
}

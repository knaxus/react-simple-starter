/**
 * This file contain the script to copy all the assets that
 * are kept in /public directory to the /build directory.
 * What happens is if assets that are not includes in js/jsx
 * are not automatically moved to the build directory.
 */

const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../../public');
const desctinationPath = path.resolve(__dirname, '../../build');

fs.copySync(sourcePath, desctinationPath, {
  dereference: true,
  filter: file => file !== 'public/index.html'
});

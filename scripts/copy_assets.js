const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../public');
const desctinationPath = path.resolve(__dirname, '../build');

fs.copySync(sourcePath, desctinationPath, {
  dereference: true,
  filter: file => file !== 'public/index.html',
});

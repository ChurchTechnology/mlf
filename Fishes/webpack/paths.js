const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
};

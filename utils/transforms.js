// @ts-check

const htmlmin = require('html-minifier');
const isProduction = process.env.ELEVENTY_ENV === 'production';

module.exports = {
  compressHTML: (content, outputPath) => {
    if (outputPath.endsWith('.html') && isProduction) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }
    return content;
  },
};

const postcssPresetEnv = require('postcss-preset-env');
const postCssMediaMinMax = require('postcss-media-minmax');
module.exports = {
  plugins: [
    postCssMediaMinMax(),
    postcssPresetEnv({
      stage: 1,
      features: {},
      importFrom: [
        'apps/www/src/styles/custom-properties/_breakpoints.css'
      ]
    })
  ]
};

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common.js');

const envs = {
  development: 'dev',
  production: 'prod',
}

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = merge(commonConfig,envConfig);

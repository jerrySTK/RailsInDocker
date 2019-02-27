process.env.NODE_ENV = process.env.NODE_ENV || 'production'
const customConfig = require('./custom');


const environment = require('./environment');
environment.config.merge(customConfig);
environment.config.merge({ devtool: 'none' });
module.exports = environment.toWebpackConfig()

var webpack = require('webpack'),
    envkey = require('envkey/loader')

module.exports = EnvkeyWebpackPlugin;

function EnvkeyWebpackPlugin(opts) {
  var env = envkey.load(opts),
      defineParams = { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }

  for (k in env) defineParams[k] = JSON.stringify(env[k]);

  return new webpack.DefinePlugin({"process.env": defineParams});
}
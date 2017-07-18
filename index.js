var webpack = require('webpack'),
    envkey = require('envkey/loader')

module.exports = EnvkeyWebpackPlugin

function EnvkeyWebpackPlugin(opts) {
  var env = envkey.load(opts),
      defineParams = {}

  if (!opts.permitted || !opts.permitted.length){
    throw new Error("'permitted' key required to specifiy vars whitelisted for client.")
  }

  if (opts.permitted.indexOf("NODE_ENV") > -1){
    defineParams.NODE_ENV = JSON.stringify(process.env.NODE_ENV)
  }

  for (k in env) defineParams[k] = JSON.stringify(env[k])

  return new webpack.DefinePlugin({"process.env": defineParams})
}
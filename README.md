## envkey-webpack-plugin

A webpack plugin that wraps [EnvKey's](https://www.envkey.com) [Node.js library](https://www.github.com/envkey/envkey-node) so you can easily inject whitelisted configuration into your browser apps.

All vars will be available on `process.env` in the browser.

To make `process.env.NODE_ENV` available, just add it to the `permitted` whitelist (see below).

# v2

Now that [EnvKey v2](https://v2.envkey.com) has been released, you can find version 2 of this package in [a subdirectory of the EnvKey v2 monorepo]https://github.com/envkey/envkey/tree/main/public/sdks/languages-and-frameworks/webpack). Using v2 requires an EnvKey v2 organization (it won't work with ENVKEYs generated in a v1 org).

[Here's a guide on migrating from v1 to v2.](https://docs-v2.envkey.com/docs/migrating-from-v1)

To continue using version 1 of this package, make sure you specify make sure you specify `@"^1.x"` when installing with npm so that you don't accidentally install v2.

## Install

`npm i envkey-webpack-plugin@"^1.x" --save-dev`

## Usage

```javascript
var webpack = require('webpack'),
    EnvkeyWebpackPlugin = require('envkey-webpack-plugin');

module.exports = {
  //...

  plugins: [
    new EnvkeyWebpackPlugin({

      permitted: ["STRIPE_PUBLISHABLE_KEY", "PUSHER_APP_KEY", "NODE_ENV"], // required, specify whitelist of vars to pull from Envkey -- you can also include "NODE_ENV" to make that available

      dotEnvFile: ".env", // optional, specify alternate dotenv file path like ".env.staging" -- file should include valid ENVKEY variable

      define: {ANOTHER_VAR: "anotherVal"} // optional, set additional vars on `process.env`

    })
  ]

 //...
}
```

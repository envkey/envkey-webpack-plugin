A webpack plugin that wraps [Envkey's](https://www.envkey.com) Node.js library so you can easily inject whitelisted configuration into your browser apps.

All vars will be available on `process.env` in the browser.

To make `process.env.NODE_ENV` available, just add it to the `permitted` whitelist (see below).

Usage:

```javascript
new EnvkeyWebpackPlugin({

  permitted: ["NODE_ENV", "STRIPE_PUBLISHABLE_KEY", "PUSHER_APP_KEY"], // required, specify whitelist of vars to pull from Envkey

  dotEnvFile: ".env", // optional, specify alternate dotenv file path like ".env.staging"

  define: {ANOTHER_VAR: "anotherVal"} // optional, set additional vars on `process.env`

})
```
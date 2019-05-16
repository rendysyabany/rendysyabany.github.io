const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

cont confirg = {
    
}

module.exports = {
    // ...
    watch: true,
    plugins: [
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['public'] }
      })
    ]
  }
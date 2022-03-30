const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
 
module.exports = {
  plugins: [
    ...
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/', '/product:id' ],
    })
  ]
}
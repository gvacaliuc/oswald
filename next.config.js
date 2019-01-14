// Configure image loader for Next.js
const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    config.resolve = {
        mainFields: ["browser", "module", "main"]
    };
    return config
  }
})
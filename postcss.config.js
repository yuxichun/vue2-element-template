// https://github.com/michael-ciniawsky/postcss-load-config
// https://postcss.docschina.org/doc
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"],
    },
  },
};

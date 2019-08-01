const withYaml = (nextConfig = {}) => {
  const newNextConfig = Object.assign({}, nextConfig, {
    webpack(config, options) {
      // insert js-yaml-loader
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      });

      // allow chaining plugins
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  });

  return newNextConfig;
};

module.exports = withYaml;

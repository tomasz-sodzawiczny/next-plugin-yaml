# Next.js + YAML

[![NPM version][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![License: MIT][mit-img]][mit-url]

Import `.yml` files in your [next.js] project.

## Installation

```sh
yarn add --dev next-plugin-yaml
```

## Usage

```js
// next.config.js
const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
  // other config here
});
```

---

Accepts both `.yml` and `.yaml` file extensions. Uses [js-yaml-loader] underneath.

## License

[MIT][mit-url]

<!-- links -->

[next.js]: https://nextjs.org/
[js-yaml-loader]: https://github.com/wwilsman/js-yaml-loader

<!-- badges -->

[mit-img]: https://img.shields.io/badge/License-MIT-blue.svg
[mit-url]: ./LICENSE
[npm-img]: https://img.shields.io/npm/v/next-plugin-yaml.svg
[npm-url]: https://www.npmjs.com/package/next-plugin-yaml
[build-img]: https://img.shields.io/travis/tomasz-sodzawiczny/next-plugin-yaml.svg
[build-url]: https://travis-ci.org/tomasz-sodzawiczny/next-plugin-yaml

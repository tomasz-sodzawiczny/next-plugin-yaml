# Next.js + YAML
Import `.yml` files in your [next.js] project. 

## Installation

```sh
yarn add --dev next-yaml
```

## Usage

```js
// next.config.js
const withYaml = require('next-yaml');

module.exports = withYaml({
 // other config here
});
```

---

Accepts both `.yml` and `.yaml` file extensions. Uses [js-yaml-loader] underneath.

## License
[MIT](./LICENSE)


<!-- links -->
[next.js]: https://nextjs.org/
[js-yaml-loader]: https://github.com/wwilsman/js-yaml-loader

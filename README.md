# webpack-config-hot

Allow for hot module replacement in [webpack].

![build status](http://img.shields.io/travis/webpack-config/webpack-config-hot/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-hot/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-hot.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-hot.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-hot.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-hot
```

Add to your `webpack.config.babel.js`:

```javascript
import hot from `webpack-config-hot`;

hot()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io

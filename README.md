# run-postcss-after-compilation-webpack-plugin
[![npm version](https://badge.fury.io/js/run-postcss-after-compilation-webpack-plugin.svg)](https://badge.fury.io/js/run-postcss-after-compilation-webpack-plugin)

Plugin used to run PostCSS on Webpack CSS output. Useful for applying the PostCSS processing on the bundled CSS instead of per-file.

Works with Webpack (>= 4.0).


# Install
```bash
npm install --save-dev run-postcss-after-compilation-webpack-plugin
```

# Usage
You must pass the absolute path to the ```postcss.config.js``` file to the plugin's constructor.

```js
// webpack.config.js

const RunPostCSSAfterCompilationPlugin = require('run-postcss-after-compilation-webpack-plugin');

module.exports = {
	plugins: {
		new RunPostCSSAfterCompilationPlugin(path.resolve(__dirname, "postcss.config.js"))
	}
}
```

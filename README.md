# run-postcss-after-compilation-webpack-plugin
Plugin used to run PostCSS on Webpack CSS output. Useful for applying the PostCSS processing on the bundled CSS instead of per-file.

Works with Webpack (>= 4.0).


# Install
```bash
npm install --save-dev run-postcss-after-compilation-webpack-plugin
```

# Usage
You must write the PostCSS config to ```./postcss.config.js``` .

```js
// webpack.config.js

const PostCSSAfterCompilationPlugin = require('run-postcss-after-compilation-webpack-plugin');

module.exports = {
	plugins: {
		new PostCSSAfterCompilationPlugin()
	}
}
```

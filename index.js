const path = require("path");
const SourceMapSource = require("webpack-sources").SourceMapSource;
const postcss = require("postcss");
const postcssLoadConfig = require("postcss-load-config");
const postcssConfig = require("./postcss.config");


class PostCSSAfterCompilationPlugin
{
	// eslint-disable-next-line class-methods-use-this
	apply(compiler)
	{
		compiler.hooks.emit.tapAsync("PostCSSAfterCompilationPlugin", (compilation, callback) => {
			postcssLoadConfig(postcssConfig)
				.then(({ plugins, options }) =>
				{
					const promises = Object.keys(compilation.assets)
						.filter(name => path.extname(name) === ".css")
						.map((name) => {
							const css = compilation.assets[name].source();
							const map = compilation.assets[name].map();
							const perFileOptions = Object.assign({}, options, { from: name, to: name, map: { prev: map } });

							return postcss(plugins)
								.process(css, perFileOptions)
								.then((result) => {
									// eslint-disable-next-line no-param-reassign
									compilation.assets[name] = new SourceMapSource(result.css, name, result.map);
								});
						});

					Promise.all(promises).then(() => callback(null), callback);
				}, callback);
		});
	}
}


module.exports = PostCSSAfterCompilationPlugin;

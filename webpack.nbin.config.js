const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const root = path.resolve(__dirname);

module.exports = merge(
	require(path.join(root, "./webpack.node.config.js"))({
		dirname: __dirname,
	}), {
		output: {
			filename: "cli.js",
			libraryTarget: "commonjs",
		},
		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false,
			setImmediate: false,
			fs: 'empty',
			child_process: 'empty',
			net: 'empty',
			crypto: 'empty'
		},
		externals: {
			"nbin": "commonjs nbin",
		},
		entry: "./src-gen/backend/main.js",
		plugins: [
			new webpack.DefinePlugin({
				"process.env.BUILD_DIR": `"${__dirname.replace(/\\/g, "\\\\")}"`,
				"process.env.CLI": `"${process.env.CLI ? "true" : "false"}"`,
			}),
		],
	},
);

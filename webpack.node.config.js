const merge = require("webpack-merge");

module.exports = (options = {}) => merge(
	require("./webpack.general.config")({
		...options,
		node: true,
	}), {
	devtool: "none",
	target: "node",
	externals: {
		// spdlog: "commonjs spdlog",
		"@theia/node-pty": "commonjs @theia/node-pty",
		'drivelist': 'commonjs drivelist',
		'find-git-repositories' : 'commonjs find-git-repositories',
		'nsfw': 'commonjs nsfw',
		'formidable': 'commonjs formidable'
	}
});

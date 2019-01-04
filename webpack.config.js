const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'galhofa.js',
		libraryTarget: 'commonjs'
		// library: 'galhofa', // Necessary only when using multiple entry points
	},
	externals: [
		{
			lodash: {
				commonjs: 'lodash',
				commonjs2: 'lodash',
				amd: 'lodash',
				root: '_',
			}
		}
	]
}

const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'galhofa.js',
		library: {
      root: 'Galhofa',
      commonjs: 'galhofa'
    },
		libraryTarget: 'umd'
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

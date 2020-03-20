var path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: "development",

    entry: {
		app :'./src/app.ts',
    },
    output: {
		library: ["[name]"],
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
    resolve: {
		extensions:['.ts', '.webpack.js', '.web.js', '.js', ".vue"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
	},
    module: {
        rules: [
			{ 
				test: /\.vue$/, loader: 'vue-loader',
				options: {
					loaders: {
					  'scss': 'vue-style-loader!css-loader!sass-loader',
					  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
					}
				  }
			},
			{
				test: /\.s?css$/,
				loaders:["vue-style-loader", "css-loader?-url", "sass-loader"]
			},
			{
				test: /\.tsx?$/, loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
			 	}
			}
		]
	},
	plugins: [ 
		new VueLoaderPlugin()
	]
}
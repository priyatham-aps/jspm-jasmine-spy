/* global module */
module.exports = function(config) {
	'use strict';
	config.set({
		autoWatch : true,
		singleRun : false,

		frameworks : ['jspm', 'jasmine'],

		files : [
			'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
		],

		jspm : {
			config : 'src/config.js',
			loadFiles : [
				'src/*.spec.js'
			],
			serveFiles : [
				'src/!(*spec).js'
			]
		},

		proxies : {
			'/base' : '/base/src'
		},

		browsers : ['Chrome'],

		preprocessors : {
			'src/!(*spec).js' : ['babel', 'sourcemap']
		},

		babelPreprocessor : {
			options : {
				sourceMap : 'inline',
				blacklist : ['useStrict']
			},
			sourceFileName : function(file) {
				return file.originalPath;
			}
		},

		reporters : ['progress']
	});
};

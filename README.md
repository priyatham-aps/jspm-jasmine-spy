Demo for issue with jasmine spy using jspm
===========================================

A minimal repo to demonstrate the issue with jasmine spying modules loaded using jspm.

Execute the following commands in terminal to reproduce the issue:

	$ npm install
	$ jspm install
	$ karma start karma.conf.js

If jspm is not installed globally, execute the following:

	$ ./node_modules/.bin/jspm install

If karma is not installed globally, execute the following:

	$ ./node_modules/.bin/karma start
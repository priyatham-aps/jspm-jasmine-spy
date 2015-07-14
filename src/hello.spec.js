/* global beforeEach, describe, expect, it */
'use strict';

import * as HelloBak from './hello';
describe('hello', () => {

	it('should return Hello Foo', function(done) {
		let Hello;
		System.import('hello').then(function(module) {
			Hello = module.default;
			expect(true).toBeTruthy();
			//expect(Hello).not.toBeUndefined();
			done();
		});
		//spyOn(Hello, 'hello');
		//let foo = Hello.hello();
		//expect(Hello.hello).toHaveBeenCalled();

	});
});

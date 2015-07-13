/* global beforeEach, describe, expect, it */
'use strict';

import * as Hello from './hello';
describe('hello', () => {

	it('should return Hello Foo', function () {
		spyOn(Hello, 'hello');
		let foo = Hello.hello();
		expect(Hello.hello).toHaveBeenCalled();
	});
});

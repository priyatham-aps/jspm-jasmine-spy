'use strict';

import * as HelloUserBak from './hellouser';
describe('hello', () => {

	it('should call hello internally', function(done) {
		let HelloUser,
			helloSpy = jasmine.createSpy('hello');

		let helloOriginal = System.get('hello');
		System.set('hello', System.newModule({hello : helloSpy}));

		System.import('hellouser').then(function(module) {
			HelloUser = module;
			HelloUser.helloUser('abc');
			expect(helloSpy).toHaveBeenCalled();
			System.delete('hello');
			System.delete('hellouser');
			System.set('hello', helloOriginal);
			done();
		});
		//expect(HelloUser.helloUser('abc')).toBe('Hello Foo abc');
	});

	it('should return Hello Foo abc', function(done) {
		let HelloUser;
		//System.set('hello', System.newModule({hello : helloSpy}));

		System.import('hellouser').then(function(module) {
			HelloUser = module;
			expect(HelloUser.helloUser('abc')).toBe('Hello Foo abc');
			done();
		});
	});
});

'use strict';

import {hello} from './hello';

export function helloUser(name) {
	return `${hello()} ${name}`;
}

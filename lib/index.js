'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

const url = `https://registry.npmmirror.com/-/binary/cwebp-bin/v5.1.0/vendor/`

module.exports = new BinWrapper()
	.src(`${url}osx/cwebp`, 'darwin')
	.src(`${url}linux/x86/cwebp`, 'linux', 'x86')
	.src(`${url}linux/x64/cwebp`, 'linux', 'x64')
	.src(`${url}win/x86/cwebp.exe`, 'win32', 'x86')
	.src(`${url}win/x64/cwebp.exe`, 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cwebp.exe' : 'cwebp');

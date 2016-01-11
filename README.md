# systemet

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> Get data from Systembolaget

See [Systembolaget's Allmänna Villkor](http://www.systembolaget.se/allmanna-villkor/) for usage terms.

## Installation

Install `systemet` using [npm](https://www.npmjs.com/):

```bash
npm install --save systemet
```

## Usage

### Module usage

```javascript
var systemet = require('systemet');

systemet.products()
	.then(products => {
		// ...
	});

systemet.stores()
	.then(stores => {
		// ...
	});
```

## API

### `products()`

Returns: `Promise<Array>`

### `stores()`

Returns: `Promise<Array>`

## License

MIT © [Joakim Carlstein](http://joakim.beng.se/)

[npm-url]: https://npmjs.org/package/systemet
[npm-image]: https://badge.fury.io/js/systemet.svg
[travis-url]: https://travis-ci.org/joakimbeng/systemet
[travis-image]: https://travis-ci.org/joakimbeng/systemet.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat

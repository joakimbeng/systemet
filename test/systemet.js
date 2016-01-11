'use strict';
const {readFileSync} = require('fs');
const {join} = require('path');
const test = require('ava');
const nock = require('nock');
const systemet = require('../src');

const file = name => readFileSync(join(__dirname, name), 'utf8');

test('products', async t => {
	t.plan(24);

	nock('http://www.systembolaget.se/api')
		.get('/assortment/products/xml')
		.reply(200, file('products.xml'), {
			'Content-Type': 'application/xml'
		});

	const [product, ...rest] = await systemet.products();

	t.is(rest.length, 0);
	t.is(product.nr, '101');
	t.is(product.articleId, '1');
	t.is(product.itemNumber, '1');
	t.is(product.name, 'Renat');
	t.is(product.nameExtra, null);
	t.is(product.price, 205.00);
	t.is(product.volume, 700);
	t.is(product.comparePrice, 292.86);
	t.is(product.startDate, '1993-10-01');
	t.is(product.endDate, null);
	t.is(product.category, 'Okryddad sprit');
	t.is(product.packaging, 'Flaska');
	t.is(product.seal, null);
	t.is(product.origin, null);
	t.is(product.country, 'Internationellt märke');
	t.is(product.producer, 'Pernod Ricard');
	t.is(product.supplier, 'Pernod Ricard Sweden AB');
	t.is(product.year, null);
	t.is(product.alcohol, 37.50);
	t.is(product.assortment, 'FS');
	t.is(product.ecological, false);
	t.is(product.koscher, false);
	t.is(product.rawMaterials, 'Förr potatis numera endast säd.');
});

test('stores', async t => {
	t.plan(15);

	nock('http://www.systembolaget.se/api')
		.get('/assortment/stores/xml')
		.reply(200, file('stores.xml'), {
			'Content-Type': 'application/xml'
		});

	const [store, ...rest] = await systemet.stores();

	t.is(rest.length, 0);
	t.is(store.type, 'Butik');
	t.is(store.nr, '0102');
	t.is(store.name, 'Fältöversten');
	t.is(store.address, 'Karlaplan 13');
	t.is(store.address2, null);
	t.is(store.zipCode, '115 20');
	t.is(store.city, 'STOCKHOLM');
	t.is(store.county, 'Stockholms län');
	t.is(store.phone, '08/662 22 89');
	t.is(store.storeType, null);
	t.is(store.services, null);
	t.same(store.keywords, ['STOCKHOLM', 'STHLM', 'ÖSTERMALM', 'KARLAPLANSRONDELLEN', 'FÄLTAN']);
	t.same(store.openingHours, {
		'2016-01-11': {from: '10:00', to: '19:00'},
		'2016-01-12': {from: '10:00', to: '19:00'},
		'2016-01-13': {from: '10:00', to: '19:00'},
		'2016-01-14': {from: '10:00', to: '19:00'},
		'2016-01-15': {from: '10:00', to: '19:00'},
		'2016-01-16': {from: '10:00', to: '15:00'},
		'2016-01-17': {from: '00:00', to: '00:00'},
		'2016-01-18': {from: '10:00', to: '19:00'},
		'2016-01-19': {from: '10:00', to: '19:00'},
		'2016-01-20': {from: '10:00', to: '19:00'},
		'2016-01-21': {from: '10:00', to: '19:00'},
		'2016-01-22': {from: '10:00', to: '19:00'},
		'2016-01-23': {from: '10:00', to: '15:00'},
		'2016-01-24': {from: '00:00', to: '00:00'},
		'2016-01-25': {from: '10:00', to: '19:00'},
		'2016-01-26': {from: '10:00', to: '19:00'}
	});
	t.same(store.rt90, {
		x: '6582011',
		y: '1630064'
	});
});

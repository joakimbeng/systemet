'use strict';
const got = require('got');
const cheerio = require('cheerio');
const toProduct = require('./map-to-product');
const toStore = require('./map-to-store');

const API_URL = 'http://www.systembolaget.se/api';

exports.products = function () {
	return got(API_URL + '/assortment/products/xml')
		.then(res => {
			const $ = cheerio.load(res.body, {
				normalizeWhitespace: true,
				xmlMode: true
			});
			return $('artikel').map((i, el) => toProduct($, el)).get();
		});
};

exports.stores = function () {
	return got(API_URL + '/assortment/stores/xml')
		.then(res => {
			const $ = cheerio.load(res.body, {
				normalizeWhitespace: true,
				xmlMode: true
			});
			return $('ButikOmbud').map((i, el) => toStore($, el)).get();
		});
};

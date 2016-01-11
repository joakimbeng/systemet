'use strict';
const utils = require('./utils');

module.exports = exports = function toProduct($, el) {
	const t = name => utils.text($(name, el));
	const f = name => utils.float($(name, el));
	const b = name => utils.bool($(name, el));

	return {
		nr: t('nr'),
		articleId: t('Artikelid'),
		itemNumber: t('Varnummer'),
		name: t('Namn'),
		nameExtra: t('Namn2'),
		price: f('Prisinklmoms'),
		volume: f('Volymiml'),
		comparePrice: f('PrisPerLiter'),
		startDate: t('Saljstart'),
		endDate: t('Slutlev'),
		category: t('Varugrupp'),
		packaging: t('Forpackning'),
		seal: t('Forslutning'),
		origin: t('Ursprung'),
		country: t('Ursprunglandnamn'),
		producer: t('Producent'),
		supplier: t('Leverantor'),
		year: t('Argang'),
		alcohol: f('Alkoholhalt'),
		assortment: t('Sortiment'),
		ecological: b('Ekologisk'),
		koscher: b('Koscher'),
		rawMaterials: b('RavarorBeskrivning')
	};
};

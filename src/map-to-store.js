'use strict';
const utils = require('./utils');

module.exports = exports = function toStore($, el) {
	const t = name => utils.text($(name, el));
	const a = name => utils.array($(name, el), ';');

	return {
		type: t('Typ'),
		nr: t('Nr'),
		name: t('Namn'),
		address: t('Address1'),
		address2: t('Address2'),
		zipCode: t('Address3'),
		city: t('Address4'),
		county: t('Address5'),
		phone: t('Telefon'),
		storeType: t('ButiksTyp'),
		services: t('Tjanster'),
		keywords: a('SokOrd'),
		openingHours: openingHours($('Oppettider', el)),
		rt90: {
			x: t('RT90x'),
			y: t('RT90y')
		}
	};
};

function openingHours(el) {
	const val = utils.text(el);
	const days = (val || '').split(/;;;[-0];/g).filter(Boolean);
	return days.reduce((obj, part) => {
		const parts = part.split(';');
		obj[cleanDate(parts[0])] = {
			from: parts[1],
			to: parts[2]
		};
		return obj;
	}, {});
}

function cleanDate(date) {
	return date.replace(/^[^\d]+/, '');
}

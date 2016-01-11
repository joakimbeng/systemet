'use strict';

exports.text = function (el) {
	return el && el.length && el.children.length && el.text() || null;
};

exports.float = function (el) {
	const val = exports.text(el);
	if (val !== null) {
		return parseFloat(val);
	}
	return val;
};

exports.bool = function (el) {
	const val = exports.text(el);
	if (val === '1') {
		return true;
	} else if (val === '0') {
		return false;
	}
	return val;
};

exports.array = function (el, sep) {
	const val = exports.text(el);
	return (val || '').split(sep);
};

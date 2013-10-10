/**
 * $.distinct is a jQuery plugin that returns the unique values of an array.
 *
 * Example:
 * var arrayWithRedundantValues = ['de', 'de', 'en', 'fr', 'en', 'es', 'it'];
 * $.distinct(arrayWithRedundantValues); // ['de', 'en', 'fr', 'es', 'it']
 */
(function ($) {
	'use strict';

	$.extend({ distinct: function (anArray) {
		var result = [];
		$.each(anArray, function (i, v) {
			if ($.inArray(v, result) == -1) result.push(v);
		});
		return result;
	} });
}(jQuery));
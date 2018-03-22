var cypherPhrase = function (obj, str) {
	var newArr = getTransformedArray(str, function (el) {
		if (obj[el]) {
			return obj[el];
		}
		return el;
	});

	return newArr.join('');
};

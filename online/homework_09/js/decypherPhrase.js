var decyperPhrase = function (obj, str) {
	var objValue = {};

	for (var elem in obj) {
		objValue[obj[elem]] = elem;
	}

	return cypherPhrase(objValue, str);
};

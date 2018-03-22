var collectIds = function (movies) {
	var filtered = getFilteredArray(movies, function (el) {
		return el.raiting > 3;
	});

	return getTransformedArray(filtered, function (el) {
		return el.id;
	});
};

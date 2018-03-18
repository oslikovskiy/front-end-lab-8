var getFilteredArray = function (arr, predFunc) {
	var newArr = [];

	forEach(arr, function (el) {
		if (predFunc(el)) {
			newArr.push(el);
		}
	})

	return newArr;
};

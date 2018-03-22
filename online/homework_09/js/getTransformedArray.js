var getTransformedArray = function (arr, add) {
	var newArr = [];

	forEach(arr, function (el) {
		newArr.push(add(el))
	});

	return newArr;
};





/*

var arr = [1, 2, 55, 22];
var newArr = [];

arr.forEach(function (el) {
	newArr.push(el + 1);
});

console.log(newArr);

*/

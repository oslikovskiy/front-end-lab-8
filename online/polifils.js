var reduce = function(arr, callback, startValue) {
	var result = startValue;

	for (var i = 0; i < arr.length; i++) {
		result = callback(result, arr[i], i, arr);
	}
	return result;
};

var includes = function (arr, value) {
	var isIncludes = false;

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === value || (value !== value && arr[i] !== arr[i])){
			isIncludes = true;
		}
	}
	return includes;
};


var bind = function(fn, context) {
	var bindArgs = [].slice.call(arguments, 2);
	return function() {
		var fnArgs = [].slice.call(arguments);
		return fn.apply(context, bindArgs.concat(fnArgs));
	};
};


var bindedSum = bind(sum, {sum: 10}, 20, 30);
bindedSum(40, 50, 60); // 210

function getFactorial(n){
	if(n <= 0 || isNaN(n)) {
		return console.log('Error !');
	}
	if (n === 1){
		return 1;
	}
	else{

		return n * getFactorial(n - 1);
	}
}
var result = getFactorial(3);
console.log(result);

var forEach = function (arr, callback) {
	for(var i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
};

var map = function (arr, callbeck) {
	var newArr = [];

	for(var i = 0; i < arr.length; i++) {
		newArr.push(callbeck.call(arr[i]));
	}
	return newArr;
};

var filter = function (arr, callback) {
	var filteredArray = [];

	for(var i = 0; i < arr.length; i++) {
		if(callback.call(arr[i]))
		filteredArray.push(arr[i]);
	}
	return filteredArray;
};

var fibo = function (n) {
	if(n === 0) {
		return 0;
	}
	else if(n === 1){
		return 1;
	}
	return fibo(n-1) + fibo(n-2);
};

var getFibo = fibo(8);
console.log(getFibo);

var faktor = function (n) {
	if(n <= 0 || isNaN(n)){
		return console.log('Error !!! ');
	}
	else if(n === 1){
		return 1;
	}
	else{
		return n * faktor(n-1);
	}
};

function bind(fn, context) {
	bindArr = [].slice.call(arguments, 2);
	return function () {
		var fnArgs = [].slice.call(arguments);
		return fn.apply(con);
	}
}

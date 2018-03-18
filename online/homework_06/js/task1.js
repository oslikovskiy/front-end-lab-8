var a = Number(prompt('Please enter 1st side ...'));
var b = Number(prompt('Please enter 2st side ...'));
var c = Number(prompt('Please enter 3st side ...'));
var square = Math.sqrt(a * b * c);


if (a < 0 || b < 0 || c < 0) {
	console.log('Incorrect data');;
} else if (a === b && a === c && b === c) {
	console.log('Type of triangle is Equilateral triangle and square is ' + square.toFixed(2));
} else if (a === b && a === c || b === a && b === c || c === a && c === b) {
	console.log('Type of triangle is Isosceles triangle and square is ' + square.toFixed(2));
} else if (a !== b && a !== c && b !== c && c !== a) {
	console.log('Type of triangle is Scalene triangle and square is ' + square.toFixed(2));
} else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
	console.log('Type of triangle is Scalene triangle and square is ' + square.toFixed(2));
}

var num = Number(prompt('Enter natural number N (0 < N <= 20)'));
var block = '[~]';
var space = '';

if (!Number.isInteger(num) || num < 0 || num > 20) {
	console.error('Incorrect!');
} else {
	for (var i = 1; i <= num; i++) {
		for (var x = 1; x <= (num - i); x++) {
			space = space.concat('   ');
		}
		for (var y = 2; y <= i; y++) {
			space = space.concat(block + block);
		}
		space = space.concat(block + '\n');
	}
}
console.log(space);

var reverseNumber = function (number) {
	var reverse = 0;

	while (number != 0) {
		reverse *= 10;
		reverse += number % 10;
		number -= number % 10;
		number /= 10;
	}
	return reverse;
}

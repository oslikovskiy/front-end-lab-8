function getClosestToZero(...args) {
	if (args.length === 0) {
		return console.error('Function requires at least 1 argument');
	}

	let min = [args[0]];

	for (let i = 1; i < args.length; i++) {
		if (Math.abs(min[0]) > Math.abs(args[i])) {
			min = [];
			min[0] = args[i];
		} else if (Math.abs(min[0]) === Math.abs(args[i]) && min.indexOf(args[i]) === -1) {
			min.push(args[i])
		}
	}
	console.log(min);
	return min.toString();
};

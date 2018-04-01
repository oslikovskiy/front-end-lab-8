var inputs = process.argv.slice(2);
var result = inputs.map((elem) => elem[0].toUpperCase()).reduce((prev, current) => prev + current);

console.log(result);
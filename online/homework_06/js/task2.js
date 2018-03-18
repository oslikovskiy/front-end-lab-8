var euro = Number(prompt('euro ...'));
var usd = Number(prompt('usd ...'));
var euro_UAH = 33.23;
var usd_UAH = 27.12;

if (euro > 0 && usd > 0) {
	var euroToUAH = (euro * euro_UAH).toFixed(2);
	var usdToUAH = (usd * usd_UAH).toFixed(2);
	var differ = (euro_UAH / usd_UAH).toFixed(2);
	console.log(euro + " euros are equal " + euroToUAH + " UAH, " + usd + " dollars are equal " + usdToUAH + " UAH, one euro is equal " + differ + " dollars.");
}

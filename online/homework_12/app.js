var root = document.getElementById('root'),
	bloc = document.createElement('div'),
	title = document.createElement('h1');
	bloc.className = 'block';
	root.appendChild(title);

var domNodes =  function (){

	var headerTitle = document.createTextNode('Most popular tanks');
	headerTitle.className = 'title';
	title.appendChild(headerTitle);

	tanks.forEach(function(takeTankProperty){
		var tank = document.createElement('div');
		tank.className = 'item';

		var tankImg = document.createElement('img');
		tankImg.className = 'tankType';
		tankImg.src = takeTankProperty.preview;

		var countryImg = document.createElement('img');
		countryImg.className = 'countryType';
		countryImg.src = 'images/countries/' + takeTankProperty.country + '.png';
		countryImg.title = '' + takeTankProperty.country;

		var tankLevel = document.createElement('span');
		tankLevel.className = 'tankLevel';
		tankLevel.innerHTML = takeTankProperty.level;

		var tankModel = document.createElement('p');
		tankModel.className = 'tankModel';
		tankModel.title = takeTankProperty.model;
		tankModel.innerHTML = takeTankProperty.model;

		bloc.appendChild(tank);
		tank.appendChild(tankImg);
		tank.appendChild(countryImg);
		tank.appendChild(tankLevel);
		tankLevel.appendChild(tankModel);
	});
	return bloc;
};

var propertyTable = document.createElement('table'),
	tableRow = document.createElement('tr'),
	tableData = document.createElement('td');



root.appendChild(domNodes());
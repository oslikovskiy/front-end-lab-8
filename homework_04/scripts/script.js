function assign () {
	var obj = arguments[0];
	
	for(var i = 1; i < arguments.length; i++){
		var nextSource = arguments[i];
      		
		if (nextSource != null) { 
	        	for (var nextKey in nextSource) {
	            	obj[nextKey] = nextSource[nextKey];
	        	}
      		}
	}
	return obj;
}

var defaults = {
	width: 100,
	height: 100
};

var options = {
	width: 150
};

var configs = assign({}, defaults, options);




function Data(name, attack, hitpoints) {
	this.name = name;
	this.attack = attack;
	this.hitpoints = hitpoints;
	this.currentHitpoints = hitpoints;
	this.totalHitpoints = hitpoints;
}

Data.prototype.getHitpoints = function () {
	return this.currentHitpoints;
}

Data.prototype.setHitpoints = function (val) {
	return this.currentHitpoints = val;
}

Data.prototype.getTotalHitpoints = function () {
	return this.totalHitpoints;
}

Data.prototype.setTotalHitpoints = function (val) {
	this.totalHitpoints = val;
}

Data.prototype.getAttack = function () {
	return this.attack;
}

Data.prototype.setAttack = function (val) {
	this.attack = val;
}

Data.prototype.fight = function () {
	if (this.name == item.name) {
		console.log('take another victim ');
		return;
	} else if (item.isAlive()) {
		item.setHitpoints(item.getHitpoints() - this.getAttack())
	} else {
		console.log('You are dead...');
		return;
	}
}

Data.prototype.isAlive = function (item) {
	if (this.getHitpoints() > 0) {
		return true;
	} else {
		return false;
	}
}

function Champion(name, attack, hitpoints) {
	this.block = false;
}

Champion.prototype.heal = function () {
	if (this.getTotalHitpoints() > (this.getHitpoints() + 5)) {
		this.setHitpoints((this.getHitpoints() + 5));
	}
}

Champion.prototype.defence = function () {
	this.block = true;
	this.setTotalHitpoints((this.getTotalHitpoints() + 1));
}

function Monster(name, attack, hitpoints) {
	this.rage = 0;
}

Monster.prototype.enrage = function () {
	this.rage = 2;
}

Monster.prototype.fury = function () {
	if ((this.getHitpoints() > 5) && (this.getTotalHitpoints() > 5)) {
		this.setHitpoints((this.getHitpoints() - 5));
		this.setTotalHitpoints((this.getTotalHitpoints() - 5));
		this.setAttack((this.getAttack() + 2));
	} else {
		console.log("You have not enough  hitpoints to continue.");
		return;
	}
}

var hunter = new Champion({
	name: 'Rexxar',
	attack: 10,
	hitpoints: 60
});

var beast = new Monster({
	name: 'King Krush',
	attack: 8,
	hitpoints: 80
});

//hunter.fight(beast);
//beast.getHitpoints();
//beast.enrage();
//hunter.fight(beast);
//beast.getHitpoints();
//beast.fight(hunter);
//hunter.getHitpoints();
//hunter.fight(beast);
//beast.isAlive();
//hunter.getAttack();
//hunter.getHitpoints();
//hunter.heal();
//hunter.getHitpoints();

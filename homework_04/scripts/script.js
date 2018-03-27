function assign() {
	var obj = arguments[0];
	
	for (var i = 1; i < arguments.length; i++) {
		var data = arguments[i];
		
		for (var key in data) {
			obj[value] = data[value];
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
		console.log('You are dead... Fuck... ha-ha-ha');
		return;
	}
}

Data.prototype.isAlive = function (item) {
	if(this.getHitpoints() > 0){
		return true;
	} else {
		return false;
	}
}

var unit = new Data();

Champion.prototype = unit;
Monster.prototype = unit;

function Champion(name, attack, hitpoints) {
	this.name = name;
	this.attack = attack;
	this.hitpoints = hitpoints;
	this.block = false;
	this.heal = function () {

	}
	this.defence = function () {

	}
}

function Monster(name, attack, hitpoints) {
	this.name = name;
	this.attack = attack;
	this.hitpoints = hitpoints;
	this.enrage = function () {

	}
	this.fury = function () {

	}
}

//console.log(`Hello ${process.argv[2]}`);
//
//var Person = function (name) {
//	this.name = name;
//};
//
//Person.prototype.getName = function () {
//	return this.name;
//};
//
//Person.prototype.setName = function (name) {
//	this.name = name;
//};
//
//var alice = new Person("alice");
//alice.getName(); // alice                   
//alice.setName('bob');
//alice.getName(); // bob
//
//// ==================================
//
//class Person {
//	constructor(name) {
//		this.name = name;
//	}
//	getName() {
//		return this.name;
//	}
//	setName(name) {
//		this.name = name;
//	}
//}
//



//----------------- class
// class Character {
// 	constructor(x, y, health_) {
// 		this.x = x;
// 		this.y = y;
// 		this.health_ = 100;
// 	}
// 	damage() {
// 		this.health_ = this.health_ - 10;
// 	}
// 	getHealth() {
// 		return this.health_;
// 	}
// 	toString() {
// 		return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
// 	}
// }

// var x = process.argv[2];
// var y = process.argv[3];
// var character = new Character(+x, +y);
// character.damage();
// console.log(character.toString());


//---------------------- class extend

// class Character {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.health_ = 100;
//     }
//     damage() {
//         this.health_ -= 10;
//     }

//     getHealth() {
//         return this.health_;
//     }

//     toString() {
//         return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
//     }
// }

// class Player extends Character {
//     constructor(x, y, name) {
//         super(x, y);
//         this.name = name;
//     }
//     move(dx, dy) {
//         this.x += dx;
//         this.y += dy;
//     }
//     toString() {
//         return `name: ${this.name} ${super.toString()}`;
//     }
// }

// var x = process.argv[2];
// var y = process.argv[3];
// var name = process.argv[4];
// var character = new Character(+x, +y);
// character.damage();
// console.log(character.toString());
// var player = new Player(+x, +y, name);
// player.damage();
// player.move(7, 8);
// console.log(player.toString());

// -------------------> arrow functions

// var inputs = process.argv.slice(2);
//     var result = inputs.map(elem => elem[0]).reduce((prev, current) => prev + current);

//     console.log(result);

// For example, in case of ["Hello", "Arrow", "Function"] should result in "HAF". Here is a full example:

// var inputs = process.argv.slice(2);
// var result = inputs.map( item => item[0]).reduce((prev, current) => prev + current );
// console.log(result);


var arg1 = process.argv[2],
    arg2 = process.argv[3];

import {
    PI,
    sqrt,
    square
} from '.modules_with_name_math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
var Cabbage = function (name, weight, color) {
	this.name = name;
	this.weight = weight;
	this.color = color;
	this.category = "Homemade vegetables";
	this.calories = 75;
	this.getAll = function () {
		return this.name + " " + this.weight + " " + this.color + " " + this.category + " " + this.calories;
	};

};

var Carrot = function (name, weight, color) {
	this.name = name;
	this.weight = weight;
	this.color = color;
	this.category = "Homemade vegetables";
	this.calories = 52;
	this.getAll = function () {
		return this.name + " " + this.weight + " " + this.color + " " + this.category + " " + this.calories;
	};

};

var Aubergine = function (name, weight, color) {
	this.name = name;
	this.weight = weight;
	this.color = color;
	this.category = "Exotic vegetables";
	this.calories = 152;
	this.getAll = function () {
		return this.name + " " + this.weight + " " + this.color + " " + this.category + " " + this.calories;
	};

};

var cabbage = new Cabbage("Cabbage", 300, "white");
var carrot = new Carrot("Carrot", 200, "white");
var aubergine = new Aubergine("Aubergine", 500, "white");
console.log(cabbage.getAll());
console.log(carrot.getAll());
console.log(aubergine.getAll());

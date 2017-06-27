//Class Vegetables
function Vegetables(name, weight) {
	var category;
	this.name = name;
	this.weight = weight;
};
Vegetables.prototype.getName = function () {
	return this.name;
};

//Class Nightshade Vegetables
function NightshadeVeg(name, weight) {
	Vegetables.call(this, name, weight);
	this.category = "Nightshade Vegetables";
};
NightshadeVeg.prototype = new Vegetables();

//Class Root Vegetables
function RootVeg(name, weight) {
	Vegetables.call(this, name, weight);
	this.category = "Root Vegetables";
};
RootVeg.prototype = new Vegetables();

//Class Cucurbitaceae Vegetables
function CucurbitaceaeVeg(name, weight) {
	Vegetables.call(this, name, weight);
	this.category = "Cucurbitaceae Vegetables";
}
CucurbitaceaeVeg.prototype = new Vegetables();

//Class Tomato
function Tomato(name, weight, calories) {
	NightshadeVeg.call(this, name, weight);
	this.calories = 75;
};
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(name, weight, calories) {
	NightshadeVeg.call(this, name, weight);
	this.calories = 375;
};
Eggplant.prototype = new NightshadeVeg();

//Class Carrot
function Carrot(name, weight, calories){
	RootVeg.call(this, name, weight);
	this.calories = 130;
}
Carrot.prototype = new RootVeg();

//Class Beet
function Beet(name, weight, calories){
	RootVeg.call(this, name, weight);
	this.calories = 230;
}
Beet.prototype = new RootVeg();

//Class Pumpkin
function Pumpkin(name, weight, calories) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = 330;
}
Pumpkin.prototype = new CucurbitaceaeVeg();

//Class Cucumber
function Cucumber(name, weight, calories) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = 30;
}
Cucumber.prototype = new CucurbitaceaeVeg();

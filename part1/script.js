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
	Vegetables.call(this, arguments);
	this.category = "Nightshade Vegetables";
};

//Class Root Vegetables
function RootVeg(name, weight) {
	Vegetables.call(this, arguments);
	this.category = "Root Vegetables";
};

//Class Cucurbitaceae Vegetables
function CucurbitaceaeVeg(name, weight) {
	Vegetables.call(this, arguments);
	this.category = "Cucurbitaceae Vegetables";
}

//Class Tomato
function Tomato(weight) {
	NightshadeVeg.call(this, arguments);
	this.name = "Tomato";
	this.weight = weight;
	this.calories = 75;
};
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(weight) {
	NightshadeVeg.call(this, arguments);
	this.name = "Eggplant";
	this.weight = weight;
	this.calories = 375;
};
Eggplant.prototype = new NightshadeVeg();

//Class Carrot
function Carrot(weight){
	RootVeg.call(this, arguments);
	this.name = "Carrot";
	this.weight = weight;
	this.calories = 130;
}
Carrot.prototype = new RootVeg();

//Class Beet
function Beet(weight){
	RootVeg.call(this, arguments);
	this.name = "Beet";
	this.weight = weight;
	this.calories = 230;
}
Beet.prototype = new RootVeg();

//Class Pumpkin
function Pumpkin(weight) {
	CucurbitaceaeVeg.call(this, arguments);
	this.name = "Pumpkin";
	this.weight = weight;
	this.calories = 330;
}
Pumpkin.prototype = new CucurbitaceaeVeg();

//Class Cucumber
function Cucumber(weight) {
	CucurbitaceaeVeg.call(this, arguments);
	this.name = "Cucumber";
	this.weight = weight;
	this.calories = 30;
}
Cucumber.prototype = new CucurbitaceaeVeg();

//Class Salad
// function Salad() {
// 	var arrayProducts = [];
// };
//
// Salad.prototype.addProduct = function (vegetable) {
// 	arrayProducts.push(vegetable)
// }

var cuc = new Cucumber(200);
console.log(cuc);

//Class Vegetables
function Vegetables(name, weight) {
	var category;
	this.name = name;
	this.weight = weight;
};
Vegetables.prototype.getName = function () {
	return this.name;
};

Vegetables.prototype.setCategory = function (category) {
	this.category = category;
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
function Tomato() {
	NightshadeVeg.call(this, arguments);
	this.name = "Tomato";
	this.weight = 100;
	this.calories = 75;
};
Tomato.prototype = new Vegetables();

//Class eggplant
function Eggplant() {
	NightshadeVeg.call(this, arguments);
	this.name = "Eggplant";
	this.weight = 100;
	this.calories = 375;
};
Eggplant.prototype = new Vegetables();

//Class Carrot
function Carrot(){
	RootVeg.call(this, arguments);
	this.name = "Carrot";
	this.weight = 100;
	this.calories = 130;
}
Carrot.prototype = new Vegetables();

//Class Beet
function Beet(){
	RootVeg.call(this, arguments);
	this.name = "Beet";
	this.weight = 100;
	this.calories = 230;
}
Beet.prototype = new Vegetables();

//Class Pumpkin
function Pumpkin() {
	CucurbitaceaeVeg.call(this, arguments);
	this.name = "Pumpkin";
	this.weight = 100;
	this.calories = 330;
}

//Class Cucumber
function Cucumber() {
	CucurbitaceaeVeg.call(this, arguments);
	this.name = "Cucumber";
	this.weight = 100;
	this.calories = 30;
}





var tomato = new Tomato();
console.log(tomato);
console.log(tomato.getName());

var eggplant = new Eggplant();
console.log(eggplant);
console.log(eggplant.getName());


// var veg1 = new HomeVegetables("Potato", "red", 250);
// var veg2 = new ExoticVegetables("Avocado", "green", 350);

// console.log(veg1);
// console.log(veg2);

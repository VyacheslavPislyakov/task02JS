//Class Vegetables
function Vegetables(name, color, weight) {
	this.name = name;
	this.color = color;
	this.weight = weight;
};
Vegetables.prototype.getName = function () {
	return this.name + " " + this.color + " " + this.weight;
};

//Class Homemade Vegetables
function HomeVegetables(name, color, weight) {
	Vegetables.call(this, arguments);
	this.category = "Homemade Vegetables";
};
HomeVegetables.prototype = new Vegetables();

//Class Exotic Vegetables
function ExoticVegetables(name, color, weight) {
	Vegetables.call(this, arguments);
	this.category = "Exotic Vegetables"
};
ExoticVegetables.prototype = new Vegetables();

//Class Potato
function Potato() {
	HomeVegetables.call(this, arguments);
	this.name = "Potato";
	this.weight = 300;
	this.color = "red";
	this.calories = 375;
};

var potato = new Potato();
console.log(potato);


// var veg1 = new HomeVegetables("Potato", "red", 250);
// var veg2 = new ExoticVegetables("Avocado", "green", 350);

// console.log(veg1);
// console.log(veg2);

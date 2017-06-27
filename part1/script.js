//Class Vegetables
function Vegetables(name, weight) {
	var category;
	this.name = name;
	this.weight = weight;
};
Vegetables.prototype.getName = function() {
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
	this.calories = calories * (100 / weight);
};
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(name, weight, calories) {
	NightshadeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
};
Eggplant.prototype = new NightshadeVeg();

//Class Carrot
function Carrot(name, weight, calories) {
	RootVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
}
Carrot.prototype = new RootVeg();

//Class Beet
function Beet(name, weight, calories) {
	RootVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
}
Beet.prototype = new RootVeg();

//Class Pumpkin
function Pumpkin(name, weight, calories) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
}
Pumpkin.prototype = new CucurbitaceaeVeg();

//Class Cucumber
function Cucumber(name, weight, calories) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
}
Cucumber.prototype = new CucurbitaceaeVeg();


//Class create Salad
function CreateSalad() {
	var nameSalat = "Summer salad";
	this.listProducts = [];
	this.totalCalories = 0;
};
CreateSalad.prototype.addProduct = function (product) {
	this.listProducts.push(product);
};
CreateSalad.prototype.getListProducts = function () {
	return this.listProducts;
};
CreateSalad.prototype.getRecipe = function () {
	for (var i = 0; i < cs.getListProducts().length; i++) {
		if (cs.getListProducts()[i].hasOwnProperty("calories")) {
			var insertLi = document.createElement('li');
			insertLi.innerHTML = cs.getListProducts()[i].name + " " + cs.getListProducts()[i].weight + " г.";
			recipeList.appendChild(insertLi);
		}
	}
};

CreateSalad.prototype.getTotalCalories = function() {
	for (var i = 0; i < cs.getListProducts().length; i++) {
		if (cs.getListProducts()[i].hasOwnProperty("calories")) {
			this.totalCalories += cs.getListProducts()[i].calories;
		}
	}
	var pTag = document.createElement("div");
	pTag.innerHTML = "Общая калорийность салата - " + Math.round(this.totalCalories);
	var myP = document.getElementById("recipe").appendChild(pTag);
	return Math.round(this.totalCalories);

}

var cs = new CreateSalad();
cs.addProduct(new Cucumber("Огурец", 200, 35));
cs.addProduct(new Carrot("Морковка", 300, 335));
cs.addProduct(new Pumpkin("Тыква", 100, 50));
cs.getRecipe();
cs.getTotalCalories();

// console.log(cs.getTotalCalories());

// var insertLi = document.createElement('li');
// insertLi.innerHTML = "1";
// recipeList.appendChild(insertLi);


////убрать методы с prototype

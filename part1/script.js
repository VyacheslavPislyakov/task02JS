//Class Vegetables
function Vegetables(name, weight) {
	// var category;
	this.name = name;
	this.weight = weight;
}
Vegetables.prototype.getName = function() {
	return this.name;
};

//Class Nightshade Vegetables
function NightshadeVeg(name, weight) {
	Vegetables.call(this, name, weight);
	this.category = "Nightshade Vegetables";
}
NightshadeVeg.prototype = new Vegetables();

//Class Root Vegetables
function RootVeg(name, weight) {
	Vegetables.call(this, name, weight);
	this.category = "Root Vegetables";
}
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
}
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(name, weight, calories) {
	NightshadeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
}
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
	this.listProducts = [];
	this.totalCalories = 0;
	this.newListProducts = [];
}
//add product
CreateSalad.prototype.addProduct = function(product) {
	this.listProducts.push(product);
};
//get list of products
CreateSalad.prototype.getListProducts = function() {
	return this.listProducts;
};
//get new list of products
CreateSalad.prototype.getNewListProducts = function() {
	return this.newListProducts;
};

//get ready recipe
CreateSalad.prototype.getRecipe = function() {
	for (var i = 0; i < this.getListProducts().length; i++) {
		if (this.getListProducts()[i].hasOwnProperty("calories")) {
			var insertLi = document.createElement("li");
			insertLi.innerHTML = this.getListProducts()[i].name + " " + this.getListProducts()[i].weight + " г.";
			document.getElementById("recipeList").appendChild(insertLi);
		}
	}
};
//get ready new sort recipe
CreateSalad.prototype.getNewRecipe = function() {
	for (var i = 0; i < this.getNewListProducts().length; i++) {
		if (this.getNewListProducts()[i].hasOwnProperty("calories")) {
			var insertLi = document.createElement("li");
			insertLi.innerHTML = this.getNewListProducts()[i].name + " " + this.getNewListProducts()[i].weight + " г.";
			document.getElementById("newRecipeList").appendChild(insertLi);
		}
	}
};

//get total calories of salad
CreateSalad.prototype.getTotalCalories = function() {
	for (var i = 0; i < this.getListProducts().length; i++) {
		if (this.getListProducts()[i].hasOwnProperty("calories")) {
			this.totalCalories += this.getListProducts()[i].calories;
		}
	}
	var pTag = document.createElement("div");
	pTag.innerHTML = "Общая калорийность салата: " + Math.round(this.totalCalories);
	document.getElementById("recipe").appendChild(pTag);
	return Math.round(this.totalCalories);
};

//sort objects by calories
function compareCalories(personA, personB) {
	return personA.calories - personB.calories;
}


var cs = new CreateSalad();
cs.addProduct(new Cucumber("Огурец", 200, 35));
cs.addProduct(new Carrot("Морковка", 300, 335));
cs.addProduct(new Pumpkin("Тыква", 100, 50));
// var listCurrentProducts = cs.getListProducts();
// cs.getRecipe();
cs.getTotalCalories();

cs.newListProducts = cs.listProducts.slice(0, cs.listProducts.length);
cs.newListProducts.sort(compareCalories);
cs.getNewRecipe(cs.newListProducts);

var buttonCalories = document.getElementById("buttonRecipe");
buttonCalories.addEventListener("click", cs.getRecipe, false);
// console.log(cs.getTotalCalories());


//Class Sorted by calories







////убрать методы с prototype

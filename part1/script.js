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
function Tomato(name, weight, calories, color) {
	NightshadeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(name, weight, calories, color) {
	NightshadeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Eggplant.prototype = new NightshadeVeg();

//Class Carrot
function Carrot(name, weight, calories, color) {
	RootVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Carrot.prototype = new RootVeg();

//Class Beet
function Beet(name, weight, calories, color) {
	RootVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Beet.prototype = new RootVeg();

//Class Pumpkin
function Pumpkin(name, weight, calories, color) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Pumpkin.prototype = new CucurbitaceaeVeg();

//Class Cucumber
function Cucumber(name, weight, calories, color) {
	CucurbitaceaeVeg.call(this, name, weight);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Cucumber.prototype = new CucurbitaceaeVeg();


//Class create Salad
function CreateSalad() {
	this.listProducts = [];
	this.totalCalories = 0;
}
//add product
CreateSalad.prototype.addProduct = function(product) {
	this.listProducts.push(product);
};
//get list of products
CreateSalad.prototype.getListProducts = function() {
	return this.listProducts;
};
//get ready recipe
CreateSalad.prototype.getRecipe = function(listCurrentProducts) {
	for (var i = 0; i < listCurrentProducts.length; i++) {
		if (listCurrentProducts[i].hasOwnProperty("calories")) {
			var insertLi = document.createElement("li");
			insertLi.innerHTML = listCurrentProducts[i].name + " " + listCurrentProducts[i].weight + " г.";
			document.getElementById("recipeList").appendChild(insertLi);
		}
	}
};
//get ready new sort recipe
CreateSalad.prototype.getNewRecipe = function(listCurrentProducts) {
	for (var i = 0; i < listCurrentProducts.length; i++) {
		if (listCurrentProducts[i].hasOwnProperty("calories")) {
			var insertLi = document.createElement("li");
			insertLi.innerHTML = listCurrentProducts[i].name + " " + listCurrentProducts[i].weight + " г. " + Math.round(listCurrentProducts[i].calories) + "ккал";
			document.getElementById("newRecipeList").appendChild(insertLi);
		}
	}
};

//get total calories of salad
CreateSalad.prototype.getTotalCalories = function(listCurrentProducts) {
	for (var i = 0; i < listCurrentProducts.length; i++) {
		if (listCurrentProducts[i].hasOwnProperty("calories")) {
			this.totalCalories += Math.round(listCurrentProducts[i].calories);
		}
	}
	var pTag = document.createElement("div");
	pTag.innerHTML = "Общая калорийность салата: " + this.totalCalories;
	document.getElementById("recipe").appendChild(pTag);
	return this.totalCalories;
};

//find Vegetables
function findVegetables(listProducts, calories, color) {
	var flag = null;
	for (var i = 0; i < listCurrentProducts.length; i++) {
		if ((listCurrentProducts[i].calories === calories) && (listCurrentProducts[i].color == color)) {
			flag = true;
			alert("Овощь с параметрами " + listCurrentProducts[i].calories + " ккал и " + listCurrentProducts[i].color + " цвета - " + listCurrentProducts[i].name);
			break;
		}
	}
	if (flag != true){
		alert("Нету такого овоща с параметрами " + listCurrentProducts[i].calories + " ккал и " + listCurrentProducts[i].color + " цвета");
	}
}

//sort objects by calories
function compareCalories(personA, personB) {
	return personA.calories - personB.calories;
}

var cs = new CreateSalad();
cs.addProduct(new Cucumber("Огурец", 200, 10, "green"));
cs.addProduct(new Carrot("Морковка", 300, 33, "orange"));
cs.addProduct(new Pumpkin("Тыква", 100, 19, "ginger"));
cs.addProduct(new Beet("Свеколочка", 350, 48, "purple"));
cs.addProduct(new Tomato("Томатики", 550, 14, "red"));

var listCurrentProducts = cs.getListProducts();
// console.log(listCurrentProducts);


var sortListRecipe = cs.listProducts.slice(0, cs.listProducts.length);
sortListRecipe.sort(compareCalories);
// console.log(sortListRecipe);





var buttonRecipe = document.getElementById("buttonRecipe");
buttonRecipe.addEventListener("click", function(){
	cs.getRecipe(listCurrentProducts);
}, false);

var buttonNewRecipe = document.getElementById("buttonNewRecipe");
buttonNewRecipe.addEventListener("click", function(){
	cs.getNewRecipe(sortListRecipe);
}, false);

var buttonCalories = document.getElementById("buttonCalories");
buttonCalories.addEventListener("click", function(){
	cs.getTotalCalories(listCurrentProducts);
}, false);

var buttonFindVegetables = document.getElementById("buttonFindVegetables");
buttonFindVegetables.addEventListener("click", function(){
	findVegetables(listCurrentProducts, 19, "ginger");
}, false);

// cs.getNewRecipe(sortListRecipe);
// cs.getRecipe(listCurrentProducts);
// cs.getTotalCalories(listCurrentProducts);


////убрать методы с prototype

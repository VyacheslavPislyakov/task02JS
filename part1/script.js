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
function NightshadeVeg(name, weight, stamen) { //add stamen - тыченка
	Vegetables.call(this, name, weight);
	this.stamen = stamen;
	this.category = "Nightshade Vegetables";
}
NightshadeVeg.prototype = new Vegetables();

//Class Root Vegetables
function RootVeg(name, weight, family) { //add family
	Vegetables.call(this, name, weight);
	this.family = family;
	this.category = "Root Vegetables";
}
RootVeg.prototype = new Vegetables();

//Class Cucurbitaceae Vegetables
function CucurbitaceaeVeg(name, weight, use) { //add use -
	Vegetables.call(this, name, weight);
	this.use = use;
	this.category = "Cucurbitaceae Vegetables";
}
CucurbitaceaeVeg.prototype = new Vegetables();


//Class Tomato
function Tomato(name, weight, stamen, calories, color) {
	NightshadeVeg.call(this, name, weight, stamen);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Tomato.prototype = new NightshadeVeg();

//Class eggplant
function Eggplant(name, weight, stamen, calories, color) {
	NightshadeVeg.call(this, name, weight, stamen);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Eggplant.prototype = new NightshadeVeg();

//Class Carrot
function Carrot(name, weight, family, calories, color) {
	RootVeg.call(this, name, weight, family);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Carrot.prototype = new RootVeg();

//Class Beet
function Beet(name, weight, family, calories, color) {
	RootVeg.call(this, name, weight, family);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Beet.prototype = new RootVeg();

//Class Pumpkin
function Pumpkin(name, weight, use, calories, color) {
	CucurbitaceaeVeg.call(this, name, weight, use);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Pumpkin.prototype = new CucurbitaceaeVeg();

//Class Cucumber
function Cucumber(name, weight, use, calories, color) {
	CucurbitaceaeVeg.call(this, name, weight, use);
	this.calories = calories * (100 / weight);
	this.color = color;
}
Cucumber.prototype = new CucurbitaceaeVeg();


//Class create Salad
function CreateSalad() {
	var listProducts = [];
	this.totalCalories = 0;

	//add product
	this.addProduct = function(product) {
		listProducts.push(product);
	};
	//get list of products
	this.getListProducts = function() {
		return listProducts;
	};

	//set list of products
	this.setListProducts = function(listProducts) {
		this.listProducts = listProducts;
	};

	//get ready recipe
	this.getRecipe = function(listCurrentProducts) {
		for (var i = 0; i < listCurrentProducts.length; i++) {
			if (listCurrentProducts[i].hasOwnProperty("calories")) {
				var insertLi = document.createElement("li");
				insertLi.id = "recipeLi";
				insertLi.innerHTML = listCurrentProducts[i].name + " " + listCurrentProducts[i].weight + " г.";
				document.getElementById("recipeList").appendChild(insertLi);
			}
		}
	};
	//get ready new sort recipe
	this.getNewRecipe = function(listCurrentProducts) {
		for (var i = 0; i < listCurrentProducts.length; i++) {
			if (listCurrentProducts[i].hasOwnProperty("calories")) {

				var insertLi = document.createElement("li");
				insertLi.innerHTML = listCurrentProducts[i].name + " " + listCurrentProducts[i].weight + " г. " + Math.round(listCurrentProducts[i].calories) + "ккал";
				document.getElementById("newRecipeList").appendChild(insertLi);
			}
		}
	};

	//get total calories of salad
	this.getTotalCalories = function(listCurrentProducts) {
		this.totalCalories = 0;
		for (var i = 0; i < listCurrentProducts.length; i++) {
			if (listCurrentProducts[i].hasOwnProperty("calories")) {
				this.totalCalories += Math.round(listCurrentProducts[i].calories);
			}
		}
		if (document.getElementById("TotalCalories") === null) {
			var pTag = document.createElement("div");
			pTag.innerHTML = "Общая калорийность салата: " + this.totalCalories;
			pTag.id = "TotalCalories";
			document.getElementById("recipe").appendChild(pTag);
		} else {
			document.getElementById("TotalCalories").innerHTML = "Общая калорийность салата: " + this.totalCalories;
		}
		return this.totalCalories;
	};

}

//find Vegetables
function findVegetables(listCurrentProducts) {
	var calories = parseInt(document.getElementById("caloriesVeg").value);
	var color = document.getElementById("colorVeg").value;
	for (var i = 0; i < listCurrentProducts.length; i++) {
		if ((listCurrentProducts[i].calories === calories) && (listCurrentProducts[i].color === color)) {
			alert("Овощь с параметрами " + listCurrentProducts[i].calories + " ккал и " + listCurrentProducts[i].color + " цвета - " + listCurrentProducts[i].name);
			break;
		} else if ((isNaN(calories)) || (color === "")) {
			alert("Введите значения");
			break;
		} else {
			alert("Нету такого овоща с параметрами " + calories + " ккал и " + color + " цвета");
			break;
		}
	}
}

//sort objects by calories
function compareCalories(personA, personB) {
	return personA.calories - personB.calories;
}

var cs = new CreateSalad();
cs.addProduct(new Cucumber("Огурец", 200, "Съедобные", 10, "green"));
cs.addProduct(new Carrot("Морковка", 300, "Зонтичные", 33, "orange"));
cs.addProduct(new Pumpkin("Тыква", 100, "Съедобные", 19, "ginger"));
cs.addProduct(new Beet("Свеколочка", 350, "Амарантовые", 48, "purple"));
cs.addProduct(new Tomato("Томатики", 550, 4, 14, "red"));

var listCurrentProducts = cs.getListProducts();
console.log(listCurrentProducts);
var sortListRecipe = cs.getListProducts().slice(0, cs.getListProducts().length);
sortListRecipe.sort(compareCalories);

var buttonRecipe = document.getElementById("buttonRecipe");
buttonRecipe.addEventListener("click", function() {
	cs.getRecipe(listCurrentProducts);
}, false);

var buttonNewRecipe = document.getElementById("buttonNewRecipe");
buttonNewRecipe.addEventListener("click", function() {
	cs.getNewRecipe(sortListRecipe);
}, false);

var buttonCalories = document.getElementById("buttonCalories");
buttonCalories.addEventListener("click", function() {
	cs.getTotalCalories(listCurrentProducts);
}, false);

var buttonFindVegetables = document.getElementById("buttonFindVegetables");
buttonFindVegetables.addEventListener("click", function() {
	findVegetables(listCurrentProducts);
}, false);



//function of create events of the buttons
// function eventsOfButtnos(id, func) {
// 	console.log(arguments[0]);
// 	document.getElementById("\"" + arguments[0] + "\"");
// 	arguments[0].addEventListener("click", function() {
// 		func;
// 	}, false);
// }
// console.log(eventsOfButtnos);

// var func = cs.getRecipe(listCurrentProducts);
// console.log(func);

// var buttonRecipe = eventsOfButtnos("buttonRecipe", cs.getRecipe(listCurrentProducts));

////убрать методы с prototype

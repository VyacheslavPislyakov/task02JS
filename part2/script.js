var Car = {
	name: "car",
	type: "coupe",
	wheels: 4,
	chiping: {
		status: false,
	}
};

var SportCar = {};

function extendDeep(parent, child) {
	var i,
		toStr = Object.prototype.toString,
		astr = "[object Array]";

	child = child || {};
	for (i in parent) {
		if (parent.hasOwnProperty(i)){
			if (typeof parent[i] === "object") {
				child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
				extendDeep(parent[i], child[i]);
			} else {
				child[i] = parent[i];
			}
		}
	}
	return child;
}


var fastCar = extendDeep(SportCar,Car);
fastCar.name = "Mercedes";
fastCar.model = "E350";
fastCar.maxSpeed = 350;
fastCar.chiping.status = true;
fastCar.chiping.company = "AMG";

var elem = document.createElement("div");
elem.innerHTML = "Name: " + fastCar.name + " Model: " + fastCar.model + " Type: " + fastCar.type +" Max.Speed: " + fastCar.maxSpeed + " Wheels: " + fastCar.wheels + " Chiping: " + fastCar.chiping.status + " company " + fastCar.chiping.company;
console.log(fastCar);
document.body.appendChild(elem);

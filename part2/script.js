var Car = {
	name: "car",
	type: "coupe",
	model: "model",
	wheels: 4,
	chiping: {
		status: false,
	},
	sound: {
		sub: "standart",
		columns: "standart",
	}
};

var SpeenCar = {
	name: "Mercedes",
	type: "coupe",
	model: "E350",
	maxSpeed: 350,
	chiping: {
		status: true,
		company: "AMG"
	},
	sound: {
		sub: "BOSS",
		columns: "Pioneer",
		headDevice: "Pioneer",
	}


};

function extendDeep(parent, child) {
	var i,
		toStr = Object.prototype.toString,
		astr = "[object Array]";

	child = child || {};

	for (i in parent) {
		if (parent.hasOwnProperty(i)){
			if (typeof parent[i] === "object") {
				if (!child[i]){
					child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
				}
				extendDeep(parent[i], child[i]);
			} else if (child.hasOwnProperty(i)) {
				continue;
			} else {
				child[i] = parent[i];
			}
		}
	}
	return child;
}


var fastCar = extendDeep(Car, SpeenCar);

var elem = document.createElement("div");
elem.innerHTML = "Parent property: Name: " + Car.name +  "; Model: " + Car.model +  " Type: " + Car.type + "; Wheels: " + Car.wheels + "; Chiping: " + Car.chiping.status + "; Sound Sub: " + Car.sound.sub + "; Sound Columns:  " + Car.sound.columns;
// console.log(fastCar);
document.body.appendChild(elem);

var elem1 = document.createElement("div");
elem1.innerHTML = "Child property Name: " + fastCar.name + " Model: " + fastCar.model + " Type: " + fastCar.type + " Wheels: " + fastCar.wheels + " Chiping: " + fastCar.chiping.status + "; Sound Sub: " + fastCar.sound.sub + "; Sound Columns:  " + fastCar.sound.columns + "; Sound head device: " + fastCar.sound.headDevice + " Max.Speed: " + fastCar.maxSpeed +  " company " + fastCar.chiping.company;
console.log(fastCar);
document.body.appendChild(elem1);

class Human {
	constructor(eyeColor, hairColor, energy) {
		this.eyeColor = eyeColor;
  	this.hairColor = hairColor;
  	this.energy = energy;
    
    console.log(this.eyeColor, this.hairColor, this.energy);
  }
  
  eat() {
  	console.log("Eating ... ");
   	this.energy += 8;
  }
    
  walk() {
  	console.log("Walking ... ");
   	this.energy -= 5;
  }
}

class Athelete extends Human {
	constructor(eyeColor, hairColor, energy) {
  	super(eyeColor, hairColor, energy);
  }
  
  run() {
  	console.log("Running ... ")
  	this.energy -= 10;
  }
}

class Cricketer extends Athelete {
	/*constructor(eyeColor, hairColor, energy) {
  	super(eyeColor, hairColor, energy);
  }*/
  
  batting() {
  	console.log("Batting ... ");
    this.energy -= 15;
  }
}

var nikhil = new Human("Brown", "Black", 65);
console.log(nikhil);
console.log("Current Energy Level " + nikhil.energy);
nikhil.walk();
nikhil.walk();
console.log("Energy Level After Walking " + nikhil.energy);
nikhil.eat();
console.log("Energy Level After Eating " + nikhil.energy);

var deepak = new Athelete("Black", "Black", 80);
console.log(deepak);
console.log("Current Energy Level " + deepak.energy);
deepak.walk();
console.log("Energy Level After Walking " + deepak.energy);
deepak.run();
console.log("Energy Level After Running " + deepak.energy);
deepak.eat();
console.log("Energy Level After Eating " + deepak.energy);

var shashank = new Cricketer("Black", "Brown", 95);
console.log(shashank);
console.log("Current Energy Level " + shashank.energy);
shashank.batting();
console.log("Energy Level After Batting " + shashank.energy);
shashank.run();
console.log("Energy Level After Running " + shashank.energy);


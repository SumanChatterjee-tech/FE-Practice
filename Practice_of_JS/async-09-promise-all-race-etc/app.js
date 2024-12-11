//call, apply and bind difference
const mathLib = {
pi: 3.14,
area: function(r){
  return this.pi * r;
},
circum: function(r,h){
  return 2*this.pi*r*h;
}
};

console.log(mathLib.area(3));
console.log(mathLib.area.call({pi:3.145},3));
console.log(mathLib.circum.apply({pi:3.145},[3,5]));
var areaUpdated = mathLib.area.bind({pi: 3.145});
console.log(areaUpdated(3));

//prototype inheritance
var AniMalTypes = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4
};
function Animal(name, type){
this.name = name;
this.type = type;
}
Animal.prototype.shout = function(){
  console.log("I am a derived function");
};
var animal = new Animal("Big Dog", AniMalTypes.MAMMAL);
console.log(animal.shout());
function Dog(name, type){
  Animal.apply(this, [name, type]);
  this.sound = "bow";
}
Dog.prototype = Animal.prototype;
var dog = new Dog("German Sh",AniMalTypes.MAMMAL);

console.log(dog.shout());

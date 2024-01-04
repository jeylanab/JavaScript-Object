// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);


let student = {
    StudentName:[ "Jeylan","tedy", "yonas"],
    StudentAge: [23,24,25],
    Departement: ["Computer Science","Computer Science","Computer Science"],
    Hobbies: "Football Gama",
    Message: "Keep it Up!"


};

console.log(student.StudentName[2]);
console.log(student["Message"]);



"use strict";
// Assignment No : 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Storing a person name in a variable
let personName = "Bushra";
let lowercaseName = personName.toLowerCase();
let uppercaseName = personName.toUpperCase();
let titlecaseName = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
// Printing a person name in lowercase
console.log("lowercaseName", lowercaseName);
// Printing a person name in uppercase
console.log("uppercaseName", uppercaseName);
// Printing a person name in Titlecase
console.log("titlecaseName", titlecaseName);

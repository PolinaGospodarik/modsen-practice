"use strict";

function testVisibility() {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";

    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}

testVisibility();

console.log(varVariable); //ReferenceError: varVariable is not defined
console.log(letVariable); //ReferenceError: letVariable is not defined
console.log(constVariable); //ReferenceError: constVariable is not defined
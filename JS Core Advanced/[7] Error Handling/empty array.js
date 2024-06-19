"use strict";

function checkArray(array) {
    if (array.length === 0) {
        throw new Error("Массив пуст");
    }
    console.log("Массив не пуст");
}

try {
    checkArray([]);
} catch (error) {
    console.log(error.message)
}

// checkArray([1, 2, 5, 7]);
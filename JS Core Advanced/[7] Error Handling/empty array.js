"use strict";

function checkArray(array) {
    try {
        if (array.length === 0) {
            throw new Error("Массив пуст");
        }
        console.log("Массив не пуст");
    } catch (error) {
        console.error(error.message);
    }
}

checkArray([]);
checkArray([1, 2, 5, 7]);
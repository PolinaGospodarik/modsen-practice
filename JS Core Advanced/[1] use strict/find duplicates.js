"use strict";

function findDuplicates (array){
    const uniqueElements = {};
    for(let item of array){
        if (uniqueElements[item]){
            return true;
        }
        uniqueElements[item] = true;
    }
    return false;
}

console.log(findDuplicates ([1, 2, 3, 2, 4])); //true
console.log(findDuplicates ([1, 2, 3, 4, 5])); //false
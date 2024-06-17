"use strict";

function findSumOfCertainElements (array){
    let sum = 0;
    for (let item of array){
        if (item>0 && item<10){
            sum+=item;
        }
    }
    return sum;
}

console.log(findSumOfCertainElements ([1,2,3,4,7,12,23,30,31,32,33]));//17

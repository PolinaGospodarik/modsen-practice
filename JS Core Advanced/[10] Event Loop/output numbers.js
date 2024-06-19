"use strict";

let i = 0;

function count() {
    if (i < 10) {
        i++;
        console.log(i);

        setTimeout(() => {
            Promise.resolve().then(count);
        }, 1000);
    }
}
count();



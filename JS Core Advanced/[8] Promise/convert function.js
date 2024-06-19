"use strict";

function loadData(callback) {
    setTimeout(() => {
        const data = {id: 1, name: 'Test'};
        callback(null, data);
    }, 1000);
}

function loadData2(callback) {
    callback(new Error("error"), 1);
}

function loadDataPromise(func) {
    return new Promise((resolve, reject) => {
        func((error, data) => {
            if (error) {
                reject(error.message);
            } else {
                resolve(data);
            }
        });
    });
}


loadDataPromise(loadData2)
    .then(
        data => {
            console.log("Data loaded:", data)
        },
        error => {
            console.error("Error loading data:", error)
        }
    )

loadDataPromise(loadData)
    .then(
        data => {
            console.log("Data loaded:", data)
        },
        error => {
            console.error("Error loading data:", error)
        }
    )
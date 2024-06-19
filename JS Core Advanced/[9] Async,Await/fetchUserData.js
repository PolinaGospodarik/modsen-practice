"use strict";

async function fetchUserData (userId){
    const response = await fetch (`https://dummyjson.com/users/${userId}`);
    const data = await response.json();

    return data;
}

fetchUserData(3).then(data => console.log(data));
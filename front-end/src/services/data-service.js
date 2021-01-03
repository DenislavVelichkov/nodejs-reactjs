import React from "react";

export function getAllCubes() {
    return fetch('/api/all-cubes')
        .then((response) => response.json())
        .catch(err => console.log(err));
}

export function getSelectedCube(cubeId) {
    return fetch(`/api/details/${cubeId}`)
        .then((response) => response.json())
        .catch(err => console.log(err))
}

export function createAccessory(name, imageURL) {
    return fetch('/api/create/accessory', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            imageURL: imageURL,
        })
    }).catch(err => console.log(err))
}

export function attachAccessory(targetId) {
   return  fetch('/api/attach/accessory', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            attach: targetId
        })
    })
       .catch((error) => console.log(error))
}

export function getAllAccessories() {
    return fetch('/api/all-accessories')
        .then((response) => response.json())
        .catch((error) => console.log(error))
}
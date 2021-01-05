export const getAllCubes = async () => {
    return await fetch('/api/all-cubes')
        .then((response) => response.json())
        .catch(err => console.log(err));
}

export const getSelectedCube = async (cubeId) => {
    return await fetch(`/api/details/${cubeId}`)
        .then((response) => response.json())
        .catch(err => console.log(err))
}

export const createNewCube = async (name, description, imageURL, difficultyLevel) => {
    return await fetch('/api/create/cube', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            description: description,
            imageURL: imageURL,
            difficultyLevel: difficultyLevel
        })
    }).then((response) => response.json())
        .catch(err => console.log(err))
}

export const createAccessory = async (name, imageURL) => {
    return await fetch('/api/create/accessory', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            imageURL: imageURL,
        })
    }).catch(err => console.log(err))
}

export const attachAccessory = async (targetCubeId, accessoryId) => {
    return await fetch('/api/attach/accessory', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            attachToCubeId: targetCubeId,
            accessoryId: accessoryId
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export const getAllAccessories = async () => {
    return await fetch('/api/all-accessories')
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export const deleteSelectedCube = async (id) => {
    return await fetch(`/api/delete/${id}`,
        {method: 'delete'})
        .then((response) => response.json())
        .catch(err => console.log(err))
}
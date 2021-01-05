import React, {useEffect, useState} from "react";
import {getAllAccessories, getAllCubes} from "../services/data-service";

const CubeContextProvider = (props) => {
    const [cubes, setCubes] = useState([])
    const [accessories, setAccessories] = useState([])

    useEffect(() => {
        getAllCubes().then(data => setCubes(data))
        getAllAccessories().then(data => setAccessories(data))
    }, [])

    const addCube = (cube) => {
        setCubes([...cubes, cube])
    }

    const updateCube = (cube) => {
        setCubes([...cubes.filter((cube) => cube._id !== cube._id), cube])
    }

    const removeCube = (cube) => {
        setCubes(cubes.filter((c) => c._id !== cube._id))
    }

    return (
        <CubeContext.Provider value={
            {
                cubes: cubes,
                accessories: accessories,
                updateCube,
                addCube,
                removeCube
            }
        }>
            {props.children}
        </CubeContext.Provider>
    );
}

export default CubeContextProvider;

export const CubeContext = React.createContext(null);


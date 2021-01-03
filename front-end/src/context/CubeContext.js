import React, {useEffect, useState} from "react";
import {getAllCubes} from "../services/data-service";

const CubeContextProvider = (props) => {
    const [cubes, setCubes] = useState([]);

    useEffect(() => {
        getAllCubes().then((data) => setCubes(data))
    }, [])

    return (
        <CubeContext.Provider value={{cubes: cubes}}>
            {props.children}
        </CubeContext.Provider>
    );
}

export default CubeContextProvider;

export const CubeContext = React.createContext({cubes: []});


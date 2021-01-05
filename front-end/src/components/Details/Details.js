import React, {useContext, useEffect, useState} from 'react';
import styles from './Details.module.scss';
import {useParams} from "react-router-dom";
import Cube from "../Cube/Cube";
import {CubeContext} from "../../context/CubeContext";
import DisplayAccessory from "../DisplayAccessory/DisplayAccessory";

const Details = () => {
    const cubeId = useParams()['cubeId'];
    const [selectedCube, setSelectedCube] = useState({})
    const {cubes} = useContext(CubeContext)

    useEffect(() => {
        const cube = cubes.find((cube) => cube._id === cubeId)
        setSelectedCube(cube);
    }, [cubes])

    return (
        <div className={styles.Details} data-testid="Details">
            <React.Fragment>
                <Cube {...selectedCube}/>
                <DisplayAccessory {...selectedCube}/>
            </React.Fragment>
        </div>
    );
}

Details.propTypes = {};

Details.defaultProps = {};

export default Details;

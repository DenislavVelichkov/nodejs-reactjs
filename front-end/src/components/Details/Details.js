import React, {useEffect, useState} from 'react';
import styles from './Details.module.scss';
import {useParams} from "react-router-dom";
import Cube from "../Cube/Cube";
import {getSelectedCube} from "../../services/data-service";

const Details = () => {
    const cubeId = useParams()['cubeId'];
    const [selectedCube, setSelectedCube] = useState([])

    useEffect(() => {
        getSelectedCube(cubeId)
            .then(cube => {
                setSelectedCube(
                    <Cube {...cube}/>
                );
            })
    }, [])

    return (
        <div className={styles.Details} data-testid="Details">
            {selectedCube}
        </div>
    );
}

Details.propTypes = {};

Details.defaultProps = {};

export default Details;

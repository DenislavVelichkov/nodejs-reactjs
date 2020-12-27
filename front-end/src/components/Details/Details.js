import React, {useEffect, useState} from 'react';
import styles from './Details.module.scss';
import {useParams} from "react-router-dom";
import Cube from "../Cube/Cube";

const Details = () => {
    const cubeId = useParams()['cubeId'];
    const [selectedCube, setSelectedCube] = useState([])

    useEffect(() => {
        fetch(`/api/details/${cubeId}`)
            .then(data => data.json())
            .then(cube => {
                setSelectedCube(
                    <Cube {...cube}/>
                );
            })
            .catch(err => console.log(err))
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

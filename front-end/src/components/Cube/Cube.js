import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.scss';
import {Link} from "react-router-dom";

const Cube = ({_id, name, imageURL, description, difficultyLevel}) => (
    <div key={_id} className={styles.Cube} data-testid="Cube">
        <h1>{name}</h1>
        <img src={imageURL} alt="selected cube"/>
            <div className={styles.details}>
                <p><span>Description:</span>{description}</p>
                <p><span>Difficulty level:</span> {difficultyLevel}</p>
                <Link className={styles.btn} to="/">Back</Link>
            </div>
    </div>
);

Cube.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    imageURL: PropTypes.string,
    difficultyLevel: PropTypes.number,
    description: PropTypes.string
};

Cube.defaultProps = {};

export default Cube;

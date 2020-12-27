import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.scss';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import cx from 'classnames';

const Index = () => {
    const [cubes, setCubes] = useState([]);

    useEffect(() => {
        fetch('/api/all-cubes')
            .then(response => response.json())
            .then(cubes => setCubes(cubes.map((cube) =>
                <div key={cube._id} className={styles.Cube}>
                    <img src={cube.imageURL} alt="cube"/>
                    <p>{cube.name}</p>
                    <p><span>Difficulty level:</span> {cube.difficultyLevel}</p>
                    <Link to={`/details/${cube._id}`}>Details</Link>
                </div>
            )))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.Index} data-testid="Index">
            <h1>Browser</h1>
            <form action="" method="">
                <input type="text"
                       className="search"
                       name="search"
                       placeholder="Search..."/>
                <input type="number"
                       name="from"
                       className="difficulty"
                       placeholder="Difficulty from..."/>
                <span>-</span>
                <input type="number"
                       name="to"
                       className="difficulty"
                       placeholder="Difficulty to..."/>
                <input type="submit" value="search"/>
            </form>
            <div className={styles.cubesContainer}>
                {cubes}
            </div>
        </div>
    );
};

Index.propTypes =
    {}
;

Index.defaultProps =
    {}
;

export default Index;

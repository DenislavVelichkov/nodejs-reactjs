import React, {useEffect, useState} from 'react';
import styles from './Index.module.scss';
import {Link} from "react-router-dom";

const Index = () => {
    const [cubes, setCubes] = useState([]);
    const [cubesJSON, setCubesJSON] = useState([]);
    const [name, setName] = useState("");
    const [minDifficulty, setMinDifficulty] = useState(1);
    const [maxDifficulty, setMaxDifficulty] = useState(2);

    useEffect(() => {
        fetch('/api/all-cubes')
            .then(response => response.json())
            .then(cubes => {
                setCubesJSON(cubes)
                setCubes(cubes.map((cube) =>
                    <div key={cube._id} className={styles.Cube}>
                        <img src={cube.imageURL} alt="cube"/>
                        <p>{cube.name}</p>
                        <p><span>Difficulty level:</span> {cube.difficultyLevel}</p>
                        <Link to={`/details/${cube._id}`}>Details</Link>
                    </div>
                ))
            })
            .catch(err => console.log(err))
    }, [])

    function setNameHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            setName(ev.target.value)
        };
    }

    function minDifficultyHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            setMinDifficulty(ev.target.value)
        };
    }

    function maxDifficultyHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            setMaxDifficulty(ev.target.value)
        };
    }

    function findCube() {
        if (minDifficulty < 0 || maxDifficulty < 0) {
            alert('Min and Max difficulty level must be positive numbers!')
        }

        return function (ev: React.FormEvent<HTMLFormElement>) {
            let filteredCubes = cubesJSON.reduce((reducer, query) => {
                if ((query.difficultyLevel >= minDifficulty && query.difficultyLevel <= maxDifficulty)) {
                    reducer.push(query)
                } else if (query.name.toLowerCase().includes(name.toLowerCase()) && name !== '') {
                    reducer.push(query)
                }
                    return reducer;
            }, [])

            if (filteredCubes.length === 0) {return}

            setCubes(filteredCubes.map((cube) =>
                <div key={cube._id} className={styles.Cube}>
                    <img src={cube.imageURL} alt="cube"/>
                    <p>{cube.name}</p>
                    <p><span>Difficulty level:</span> {cube.difficultyLevel}</p>
                    <Link to={`/details/${cube._id}`}>Details</Link>
                </div>
            ))

            ev.preventDefault()
        };
    }

    return (
        <div className={styles.Index} data-testid="Index">
            <h1>Browser</h1>
            <form onSubmit={findCube()}>
                <input type="text"
                       className="search"
                       name="search"
                       placeholder="Search..."
                       value={name}
                       onChange={setNameHandler()}/>
                <input type="number"
                       name="from"
                       className="difficulty"
                       placeholder="Difficulty from..."
                       value={minDifficulty}
                       onChange={minDifficultyHandler()}/>
                <span>-</span>
                <input type="number"
                       name="to"
                       className="difficulty"
                       placeholder="Difficulty to..."
                       value={maxDifficulty}
                       onChange={maxDifficultyHandler()}/>
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

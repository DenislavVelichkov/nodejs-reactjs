import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.scss';
import {Link, withRouter} from "react-router-dom";

const Cube = ({_id, name, imageURL, description, difficultyLevel, ...props}) => {

    function deleteCube(id) {
        return function (ev: React.MouseEvent<HTMLButtonElement>) {
            ev.preventDefault()

            fetch(`/api/delete/${id}`, {method: 'delete'})
                .then(() => {
                    props.history.push('/')
                })
                .catch(err => console.log(err))
        };
    }

    return (
        <div key={_id} className={styles.Cube} data-testid="Cube">
            <h1>{name}</h1>
            <img src={imageURL} alt="selected cube"/>
            <div className={styles.details}>
                <p><span>Description:</span>{description}</p>
                <p><span>Difficulty level:</span> {difficultyLevel}</p>
                <Link className={styles.btn} to="/">Back</Link>
                <button className={styles.btn} onClick={deleteCube(_id)}>Delete</button>
            </div>
        </div>
    );
}

Cube.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    imageURL: PropTypes.string,
    difficultyLevel: PropTypes.number,
    description: PropTypes.string
};

Cube.defaultProps = {};

export default withRouter(Cube);

import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.scss';
import {Link, withRouter} from "react-router-dom";
import {deleteSelectedCube} from "../../services/data-service";
import {CubeContext} from "../../context/CubeContext";

const Cube = ({_id, name, imageURL, description, difficultyLevel, accessories, ...props}) => {
    const {removeCube} = useContext(CubeContext)

    const deleteCube = (id) => {
        return (ev: React.MouseEvent<HTMLButtonElement>) => {
            ev.preventDefault()

            deleteSelectedCube(id)
                .then((deletedCube) => {
                    removeCube(deletedCube)
                    props.history.push('/')
                })
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
                <Link className={styles.btn} to={`/attach/accessory/${_id}`}>Attach Accessory</Link>
            </div>
        </div>
    );
}

Cube.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    imageURL: PropTypes.string,
    difficultyLevel: PropTypes.number,
    description: PropTypes.string,
    accessories: PropTypes.array
};

Cube.defaultProps = {};

export default withRouter(Cube);

import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectedAttCube.module.scss';

const SelectedAttCube = ({_id, name, imageURL}) => {

    return (
        <div key={_id} className={styles.SelectedAttCube} data-testid="SelectedAttCube">
            <div data-testid="SelectedAttCube">
                <h1>{name}</h1>
                <img src={imageURL} alt="selected cube"/>
            </div>
        </div>
    );
}

SelectedAttCube.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    imageURL: PropTypes.string
};

export default SelectedAttCube;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.scss';

const Cube = () => (
    <div className={styles.Cube} data-testid="Cube">
        Cube Component
    </div>
);

Cube.propTypes = {};

Cube.defaultProps = {};

export default Cube;

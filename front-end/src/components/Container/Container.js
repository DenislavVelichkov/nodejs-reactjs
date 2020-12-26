import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = () => {
    return (
        <div className={styles.Container} data-testid="Container">
            Container Component
        </div>
    );
}

Container.propTypes = {};

Container.defaultProps = {};

export default Container;

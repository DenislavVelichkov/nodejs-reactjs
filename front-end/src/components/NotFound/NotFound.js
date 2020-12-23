import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

const NotFound = () => (
    <div className={styles.NotFound} data-testid="NotFound">
        <img id="sadFaceImg"
             src="https://imageog.flaticon.com/icons/png/512/42/42901.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
             alt="sad face" />
        <h1>404</h1>
        <h2>Page not found</h2>
    </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;

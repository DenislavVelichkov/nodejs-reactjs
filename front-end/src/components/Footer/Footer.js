import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
      @Cubicle: Exercise for Express.js and ReactJS
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.About} data-testid="About">
            <h1>About Cubicle</h1>
            <div className="about">
                <p>
                    <i>"Cubicle"</i> is a place, where you can browse some of the most popular rubik cubes in the world and add some new cubes that you have discovered. This application was created as an exercise for the
                    <a href="https://softuni.bg/trainings/2452/js-back-end-september-2019"> JS Back-End course </a> at the <a href="https://softuni.bg/"> Software University </a>.
                </p>
            </div>
        </div>
    );
};

About.propTypes = {};

About.defaultProps = {};

export default About;

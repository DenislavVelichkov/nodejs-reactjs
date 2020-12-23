import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import logo from '../../static/images/logo.png'
import {Link, NavLink} from "react-router-dom";

const Nav = () => {

    return (
        <div className={styles.Nav} data-testid="Nav">
            <ul>
                <li><img class="logo" src={logo} alt="logo"/></li>
                <li><NavLink to="/">Browse</NavLink></li>
                <li><NavLink to="/create">Add a Cube</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Create.module.scss';

const Create = () => {
    return (
        <div className={styles.Create} data-testid="Create">
            <h1>Create</h1>
            <div className="form">
                <form action="/api/create" method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="name">Description</label>
                    <textarea id="name" name="description"/>
                    <label htmlFor="image">ImageUrl</label>
                    <input type="text" id="image" name="imageURL"/>
                    <label htmlFor="difficulty">Difficulty</label>
                    <select id="difficulty" name="difficultyLevel">
                        <option value="1">1 - Very Easy</option>
                        <option value="2">2 - Easy</option>
                        <option value="3">3 - Medium (Standard 3x3)</option>
                        <option value="4">4 - Intermediate</option>
                        <option value="5">5 - Expert</option>
                        <option value="6">6 - Hardcore</option>
                    </select>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        </div>
    );
}

Create.propTypes = {};

Create.defaultProps = {};

export default Create;

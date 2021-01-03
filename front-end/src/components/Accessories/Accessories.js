import React, {useState} from 'react';
import styles from './Accessories.module.scss';
import {createAccessory} from "../../services/data-service";

const Accessories = (props) => {
    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")

    function submitAccessory() {
        return function (event: React.MouseEvent<HTMLButtonElement>) {
            event.preventDefault()

            createAccessory(name, imageURL)
                .then(() => {
                    props.history.push('/')
                })
        };
    }

    function imgHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            let imgURL = ev.target.value
            setImageURL(imgURL)
        };
    }

    function nameHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            let name = ev.target.value
            setName(name)
        };
    }

    return (
        <div className={styles.Accessories} data-testid="Accessories">
            <h1>Create Cube</h1>
            <div className="form">
                <form onSubmit={submitAccessory()}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={nameHandler()}/>
                    <label htmlFor="imageURL">ImageUrl</label>
                    <input type="text" id="imageURL" name="imageURL" value={imageURL} onChange={imgHandler()}/>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

Accessories.propTypes = {};

Accessories.defaultProps = {};

export default Accessories;

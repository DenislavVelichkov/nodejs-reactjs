import React, {useContext, useEffect, useState} from 'react';
import styles from './AttachAccessory.module.scss';
import {CubeContext} from "../../context/CubeContext";
import {attachAccessory, getAllAccessories} from "../../services/data-service";
import Cube from "../Cube/Cube";

const AttachAccessory = (props) => {
    const [targetId, setTargetId] = useState([])
    const [selectedOption, setSelectedOptions] = useState([])
    const [options, setOptions] = useState([])
    const {cubes} = useContext(CubeContext)
    const targetCube = cubes.reduce((acc, c) => {
        if (c.name === selectedOption) {
            acc.push(c)
        }
        return acc
    }, [])

    useEffect(()=> {
        getAllAccessories().then((data) => {
            let options = data.map((accessory) =>
                <option key={accessory._id} value={accessory.name}>{accessory.name}</option>
            )

            setOptions(options)
        })
    },[])


    function attachAccessoryToCube() {
        return function (ev: React.FormEvent<HTMLFormElement>) {
            ev.preventDefault()

            attachAccessory(targetId)
                .then(() => {
                    setTargetId(targetId)
                    props.history.push(`/details/${targetId}`)
                })
        };
    }

    function targetHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            let targets = ev.target.value
            setSelectedOptions(targets)
        };
    }

    return (
        <div className={styles.AttachAccessory} data-testid="AttachAccessory">
            <Cube {...targetCube}/>
            <h1>Attach Accessory</h1>
            <div className="form">
                <form onSubmit={attachAccessoryToCube()}>
                    <label htmlFor="accessories-list">Accessory name:</label>
                    <select id="accessories-list" value={selectedOption} onChange={targetHandler()}>
                        {options}
                    </select>
                    <button type="submit">Attach</button>
                </form>
            </div>
        </div>
    );
}

AttachAccessory.propTypes = {};

AttachAccessory.defaultProps = {};

export default AttachAccessory;

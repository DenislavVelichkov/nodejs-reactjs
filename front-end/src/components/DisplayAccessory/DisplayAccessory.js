import React, {useContext, useEffect, useState} from 'react';
import styles from './DisplayAccessory.module.scss';
import {CubeContext} from "../../context/CubeContext";

const DisplayAccessory = (props) => {
    const {accessories} = useContext(CubeContext)
    const [filteredAccessories, setFilteredAccessories] = useState([])

    useEffect(() => {
        const filteredAcc = accessories.reduce((acc, accessory) => {
            let isAccessoryPresent = props.accessories.find((accId) => accId === accessory._id)

            if (isAccessoryPresent) {
                acc.push(accessory);
            }

            return acc
        }, [])

        setFilteredAccessories(filteredAcc)

    }, [accessories])

    const renderFilteredAccessories = () => {
        return filteredAccessories.map((accessory) =>
            <div key={accessory._id} className="accessory">
                <img src={accessory.imageURL} alt="stickerName"/>
                <h3>{accessory.name}</h3>
                {/*<p>Accessory Description</p>*/}
            </div>
        )
    }
    return (
        <div className={styles.DisplayAccessory} data-testid="DisplayAccessory">
            {renderFilteredAccessories()}
        </div>
    );
}

DisplayAccessory.propTypes = {
};

export default DisplayAccessory;

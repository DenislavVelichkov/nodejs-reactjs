import React, {useContext, useEffect, useState} from 'react';
import styles from './AttachAccessory.module.scss';
import {CubeContext} from "../../context/CubeContext";
import {attachAccessory} from "../../services/data-service";
import SelectedAttCube from "../SelectedAttCube/SelectedAttCube";

const AttachAccessory = (props) => {
    const [selectedOptionName, setSelectedOptionName] = useState("")
    const [selectedAttachmentId, setSelectedAttachmentId] = useState("")
    const [targetCube, setTargetCube] = useState({})
    const {cubes, accessories} = useContext(CubeContext)
    const targetCubeId = props.location.pathname.split("/")[3]


    useEffect(() => {
        setTargetCube(cubes.reduce((acc, c) => {
            if (c._id === targetCubeId) {
                return Object.assign(acc, c)
            }
        }, {}))

    }, [cubes])

    const attachAccessoryToCube = () => {

        return (ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault()

            attachAccessory(targetCubeId, selectedAttachmentId)
                .then(() => {
                    props.history.push(`/details/${targetCubeId}`)
                })
        };
    }

    const targetHandler = () => {
        return (ev: React.ChangeEvent<HTMLInputElement>) => {
            let targetName = ev.target.value
            const attachmentId = accessories.find((accessory) => accessory.name === targetName)._id

            setSelectedAttachmentId(attachmentId)
            setSelectedOptionName(targetName)
        };
    }

    const renderOptions = () => {
        return accessories.map((accessory) => {
            const isAccessoryPresent = targetCube.accessories.find((acc) => acc === accessory._id);
            console.log(isAccessoryPresent)
                if (isAccessoryPresent) {
                    return (<option key={accessory._id} value={accessory.name}>{accessory.name}</option>)
                }
                // } else {
                //     return (
                //         <h3 className="italic">This cube has all available accessories so far or there is no available
                //             at all...
                //         </h3>)
                // }
            }
        )
    }

    return (
        <div className={styles.AttachAccessory} data-testid="AttachAccessory">
            <SelectedAttCube {...targetCube}/>
            <h1>Attach Accessory</h1>
            <div className="form">
                <form onSubmit={attachAccessoryToCube()}>
                    <label htmlFor="accessories-list">Accessory name:</label>
                    <select id="accessories-list" multiple={false} defaultValue={selectedOptionName}
                            onChange={targetHandler()}>
                        {renderOptions()}
                    </select>
                    <button type="submit">Attach</button>
                </form>
            </div>
        </div>
    );
}

AttachAccessory.propTypes = {};

AttachAccessory.defaultProps = {};

export default AttachAccessory

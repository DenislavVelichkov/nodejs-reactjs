import React, {useState} from 'react';
import styles from './Create.module.scss';

const Create = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [difficultyLevel, setDifficultyLevel] = useState(0)

    function submitCube() {
        return function (event: React.MouseEvent<HTMLButtonElement>) {

            fetch('/api/create', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    description: description,
                    imageURL: imageURL,
                    difficultyLevel: difficultyLevel
                })
            })
                .then()
                .catch(err => console.log(err))

            event.preventDefault()
        };
    }

    function nameHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            let name = ev.target.value
            setName(name)
        };
    }

    function descryHandler() {
        return function (ev: React.ChangeEvent<HTMLTextAreaElement>) {
            let description = ev.target.value
            setDescription(description)
        };
    }

    function imgHandler() {
        return function (ev: React.ChangeEvent<HTMLInputElement>) {
            let imgURL = ev.target.value
            setImageURL(imgURL)
        };
    }

    function diffHandler() {
        return function (ev: React.ChangeEvent<HTMLSelectElement>) {
            let diff = ev.target.value
            setDifficultyLevel(diff)
        };
    }

    return (
        <div className={styles.Create} data-testid="Create">
            <h1>Create</h1>
            <div className="form">
                <form onSubmit={submitCube()}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={nameHandler()}/>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={description} onChange={descryHandler()}/>
                    <label htmlFor="imageURL">ImageUrl</label>
                    <input type="text" id="imageURL" name="imageURL" value={imageURL} onChange={imgHandler()}/>
                    <label htmlFor="difficultyLevel">Difficulty</label>
                    <select id="difficultyLevel" name="difficultyLevel" onChange={diffHandler()}>
                        <option value="1">1 - Very Easy</option>
                        <option value="2">2 - Easy</option>
                        <option value="3">3 - Medium (Standard 3x3)</option>
                        <option value="4">4 - Intermediate</option>
                        <option value="5">5 - Expert</option>
                        <option value="6">6 - Hardcore</option>
                    </select>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

Create.propTypes = {};

Create.defaultProps = {};

export default Create;
